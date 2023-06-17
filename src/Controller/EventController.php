<?php

namespace App\Controller;

use App\Utils\DataUtils;
use App\Form\EventType;
use App\Repository\EntryRepository;
use App\Repository\TournamentRepository;
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

    #[Route('/api/event/register', name: 'app_event_register', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function register(
        Request $request, 
        EntityManagerInterface $manager, 
        Security $security, 
        TournamentRepository $tournamentRepository) 
        {
        
            $data = json_decode($request->getContent(), true);
            $event = $tournamentRepository->find($data['id']);
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
        $id, 
        TournamentRepository $tournamentRepository,
        EntityManagerInterface $manager, 
        )
    {
        $event = $tournamentRepository->find($id);
        $data = json_decode($request->getContent(), true);

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

}
 