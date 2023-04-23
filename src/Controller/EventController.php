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
use Symfony\Component\HttpFoundation\File\Exception\FileException;
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
    
    #[Route('/api/event/{id}/entry/new', name: 'app_event_entry_new', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function newEntry(
        Request $request,
        $id,
        EntityManagerInterface $manager, 
        Security $security, 
        TournamentRepository $tournamentRepository ) 
            {
                $data = json_decode($request->getContent(), true);
                $user = $security->getUser();
                $event = $tournamentRepository->find($id);

                $entry = new Entry();
                $entry
                    ->setUser($user)
                    ->setCreatedAt(new \DateTimeImmutable())
                    ->setTournament($event);

                $form = $this->createForm(EntryType::class, $entry, ['csrf_protection' => false]);
                $form->submit($data);

                if (!$form->isValid()) {
                
                    $errors = [];
        
                    foreach ($form->getErrors(true) as $error) {
                        // Méthode de FormError
                        $errors[$error->getOrigin()->getName()] = $error->getMessage();
                    }
                    return $this->json($errors, 422); // $data, status_code
                }
                
                // Récupération du fichier uploadé
                $imageFile = $form->get('picture')->getData();

                if ($imageFile) {
                    // Génération d'un nom unique pour le fichier
                    $newFilename = uniqid().'.'.$imageFile->guessExtension();

                    try {
                        // Déplacement du fichier vers le répertoire public/uploads
                        $imageFile->move(
                            $this->getParameter('kernel.project_dir') . '/public/assets/user/entries',
                            $newFilename
                        );
                    } catch (FileException $e) {
                        // Gestion des exceptions
                        // ...
                    }

                    // Mise à jour de l'objet Entry avec le nom du fichier
                    $entry->setPicture($newFilename);
                }
                
                $manager->persist($entry);
                $manager->flush();

                return $this->json(['success' => true]);
            }
}
 