<?php

namespace App\Controller;

use App\Entity\Entry;
use App\Entity\Tournament;
use App\Form\EntryType;
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
    #[Route('/event/{id}', name: 'app_event')]
    public function index(TournamentRepository $tournamentRepository, EntryRepository $entryRepository, int $id, Security $security): Response
    {
        // Récupère l'événement avec l'ID
        $event = $tournamentRepository->find($id);

        // Si l'événement n'existe pas => 404.
        if (!$event) {
            throw $this->createNotFoundException();
        }

        // Objet lisible pou React
        $eventData = [
            'id' => $event->getId(),
            'name' => $event->getName(),
            'createdAt' => $event->getCreatedAt(),
            'endAt' => $event->getEndAt(),
            'speed' => $event->getSpeed(),
            'privacy' => $event->isPrivacy(),
            'capacity' => $event->getCapacity(),
            'registered' => $event->getRegistered()->map(function ($user) {
                return [
                    'id' => $user->getId(),
                    'name' => $user->getName(),
                    'picture' => $user->getPicture(),
                    'roles' => $user->getRoles(),
                    'email' => $user->getEmail(),
                ];
            })->toArray(),
            'user' => [
                'id' => $event->getUser()->getId(),
                'name' => $event->getUser()->getName(),
                'picture' => $event->getUser()->getPicture(),
                'roles' => $event->getUser()->getRoles(),
                'email' => $event->getUser()->getEmail(),   
            ],
            'race' => [
                'id' => $event->getRace()->getId(),
                'name' => $event->getRace()->getName(),
                'slug' => $event->getRace()->getSlug(),
                'picture' => $event->getRace()->getPicture(),
                'cup' => [
                    'id' => $event->getRace()->getCup()->getId(),
                    'name' => $event->getRace()->getCup()->getName(),
                    'slug' => $event->getRace()->getCup()->getSlug(),
                    'picture' => $event->getRace()->getCup()->getPicture(),
                ],
            ]
        ];

        // Entries
        $entries = $entryRepository->findBy(array('tournament' => $id));
        $entryData = [];
        foreach ($entries as $entry) {
            $entryData[] = [
                'id' => $entry->getId(), 
                'user' => [
                    'id' => $entry->getUser()->getId(),
                    'name' => $entry->getUser()->getName(),
                    'picture' => $entry->getUser()->getPicture()
                ],
                'time' => $entry->getTime(),
            ];
        }

        // Récupération de l'utilisateur connecté en objet Pour React
        if ($this->isGranted('ROLE_USER')) {
            $user = [
                'id' => $this->getUser()->getId(),
                'name' => $this->getUser()->getName(),
            ];
        } else {
            $user = null;
        }

        return $this->render('event/index.html.twig', [
            'event' => $eventData,
            'user' => $user,
            'entries' => $entryData,
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
    
    #[Route('/api/event/entry/new', name: 'app_event_entry_new', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function newEntry(Request $request,
    EntityManagerInterface $manager, 
    Security $security, 
    TournamentRepository $tournamentRepository ) 
        {
            $data = json_decode($request->getContent(), true);
            $event = $tournamentRepository->find($data['id']);
            $user = $security->getUser();

            $entry = new Entry();
            $entry
                ->setUser($user)
                ->setTournament($event)
                ->setCreatedAt(new \DateTimeImmutable());

            $form = $this->createForm(EntryType::class, $entry, ['csrf_ptotection' => false]);
            $form->submit($data);

            if (!$form->isValid()) {
            
                $errors = [];
    
                foreach ($form->getErrors(true) as $error) {
                    // Méthode de FormError
                    $errors[$error->getOrigin()->getName()] = $error->getMessage();
                }
                return $this->json($errors, 422); // $data, status_code
            }    
            
            $manager->persist($entry);
            $manager->flush();

            return $this->json(['success' => true]);
        }
}
 