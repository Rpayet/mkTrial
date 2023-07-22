<?php

namespace App\Controller;

use App\Entity\User;
use App\Utils\DataUtils;
use App\Form\EventType;
use App\Repository\EntryRepository;
use App\Repository\TournamentRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class EventController extends AbstractController
{
    #[Route('event/{id}', name: 'app_event')]
    public function index($id): Response
    {
        return $this->render('event/index.html.twig', [
            'id' => $id
        ]);
    }

    #[Route('api/event/{id}', name: 'api_event', methods: ['GET'])]
    public function event(
        TournamentRepository $tournamentRepository, 
        int $id,
        EntryRepository $entryRepository)
    {
        // Récupère l'événement avec l'ID
        $event = $tournamentRepository->find($id);

        // Si l'événement n'existe pas => 404.
        if (!$event) {
            throw $this->createNotFoundException();
        }

        // Infos générales de l'événement
        $eventData = DataUtils::getEventData($event);

        // Entries
        $entries = $entryRepository->findBy(array('tournament' => $id));
        $entryData = array_map([DataUtils::class, 'getEntryData'], $entries);

        // Récupération de l'utilisateur connecté en objet pour React
        $user = $this->isGranted('ROLE_USER') ? DataUtils::getUserData($this->getUser()) : null;


        return $this->json([
            'event' => $eventData,
            'entries' => $entryData,
            'user' => $user
        ]);
    }

    #[Route('/api/event/{id}/register', name: 'app_event_register', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function register(
        int $id,
        EntityManagerInterface $manager, 
        Security $security, 
        TournamentRepository $tournamentRepository) 
        {
            $event = $tournamentRepository->find($id);
            $user = $security->getUser();

            if ($event->getRegistered()->contains($user)) {
                return $this->json(['error' => 'Vous êtes déjà inscrit']);
            }
            
            $event->addRegistered($user);

            $manager->persist($event);
            $manager->flush();

            return $this->json(['success' => true]);
        }
    
    #[Route('/api/event/{id}/edit', name: 'app_event_edit', methods: ['POST'])]
    #[isGranted('ROLE_USER')]
    public function edit(
        Request $request,
        int $id, 
        TournamentRepository $tournamentRepository,
        EntityManagerInterface $manager, 
        )
    {
        $event = $tournamentRepository->find($id);
        $data = json_decode($request->getContent(), true);

        if ($data['capacity'] < $event->getRegistered()->count()) {
            $errors = ['capacity' => 'Le nombre de place disponible ne peut être inférieur au nombre d\'inscrits.'];
            return $this->json($errors, 422);
        }

        $form = $this->createForm(EventType::class, $event, ['csrf_protection' => false]);
        $form->submit($data);

        if (!$form->isValid()) {
            
            $errors = [];

            foreach ($form->getErrors(true) as $error) {
                // Méthode de FormError
                $errors[$error->getOrigin()->getName()] = $error->getMessage();
            }
            return $this->json($errors, 422); // $data, status_code
        }


        $manager->persist($event);
        $manager->flush();

        return $this->json(['data' => $data]);
    }

    #[Route('/api/event/{id}/delete', name: 'app_event_delete', methods: ['DELETE'])]
    #[isGranted('ROLE_USER')]
    public function delete(
        TournamentRepository $tournamentRepository,
        EntryRepository $entryRepository,
        int $id,
        EntityManagerInterface $manager
    ) {
    
        // Récupère l'événement avec l'ID
        $event = $tournamentRepository->find($id);

        // Si l'événement n'existe pas => 404.
        if (!$event) {
            throw $this->createNotFoundException();
        }

        // Entries
        $entries = $entryRepository->findBy(['tournament' => $event]);

        foreach ($entries as $entry) {
            $user = $entry->getUser();
            $event->removeEntry($entry); // Supprimer l'entrée de l'événement
            $user->removeEntry($entry); // Supprimer l'entrée de l'utilisateur
            $manager->remove($entry); // Supprimer l'entrée de la base de données
        }

        // Retirer l'événement de la liste des tournois de chaque utilisateur inscrit
        $users = $event->getRegistered();
        foreach ($users as $user) {
            $user->removeTournament($event);
        }

        // Supprimer toutes les données liées à l'événement de la base de données
        $manager->remove($event);
        $manager->flush();

        // Supprimer l'image associée à chaque entrée
        foreach ($entries as $entry) {
            $imageFilename = $entry->getPicture();

            if ($imageFilename) {
                $imagePath = $this->getParameter('kernel.project_dir') . '/public/assets/user/entries/' . $imageFilename;

                // Vérifier si le fichier existe avant de le supprimer
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }
            }
        }
    
        return $this->json(['data' => 'success']);
    }

    #[Route('/api/event/{id}/interruption', name: 'app_event_interruption', methods: ['POST'])]
    #[isGranted('ROLE_USER')]
    public function interruption(
        TournamentRepository $tournamentRepository,
        int $id,
        EntityManagerInterface $manager
    ) {
        $event = $tournamentRepository->find($id);

        $event->setEndAt(new \DateTimeImmutable());

        $manager->persist($event);
        $manager->flush();
    
        return $this->json(['data' => 'success']);
    }

    #[Route('/api/event/{eventId}/unregister/{userId}', name: 'app_event_unregister', methods: ['DELETE'])]
    #[isGranted('ROLE_USER')]
    public function unregister(
        int $eventId,
        int $userId,
        TournamentRepository $tournamentRepository,
        UserRepository $userRepository,
        EntityManagerInterface $manager, 
        )
    {
        $event = $tournamentRepository->find($eventId);
        $user = $userRepository->find($userId); 

        if (!$event->getRegistered()->contains($user)) {
            return $this->json(['error' => 'Vous n\'êtes pas inscrit']);
        }

        $entries = $event->getEntries();
        foreach ($entries as $entry) {
            if ($entry->getUser() === $user) {
                $imageFilename = $entry->getPicture();
        
                if ($imageFilename) {
                    $imagePath = $this->getParameter('kernel.project_dir') . '/public/assets/user/entries/' . $imageFilename;

                    // Vérifier si le fichier existe avant de le supprimer
                    if (file_exists($imagePath)) {
                        unlink($imagePath);
                    }
                }

                $event->removeEntry($entry);
                $manager->remove($entry);
            }
        }        

        $event->removeRegistered($user);

        $manager->persist($event);
        $manager->flush();

        return $this->json(['success' => true]);
    }

}
 