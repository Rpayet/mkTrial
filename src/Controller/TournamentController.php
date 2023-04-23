<?php

namespace App\Controller;

use App\Entity\Tournament;
use App\Form\EventType;
use App\Form\UserType;
use App\Repository\RaceRepository;
use App\Repository\TournamentRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class TournamentController extends AbstractController
{
    #[Route('/tournament', name: 'app_tournament')]
    public function index(TournamentRepository $tournamentRepository, RaceRepository $raceRepository): Response
    {
        // Pour récupérer le tableau d'objet des Tournois.
        $tournaments = $tournamentRepository
                    ->createQueryBuilder('t')
                    ->where('t.endAt >= :today')
                    ->setParameter('today', new \DateTime())
                    ->orderBy('t.endAt', 'ASC')
                    ->getQuery()
                    ->getResult();

        // Récupère la liste des tournois
        $eventsData = [];
        foreach ($tournaments as $tournament) {
            $eventsData[] = [
                'id' => $tournament->getId(),
                'name' => $tournament->getName(),
                'createdAt' => $tournament->getCreatedAt(),
                'endAt' => $tournament->getEndAt()->format('d/m/Y'),
                'speed' => $tournament->getSpeed(),
                'privacy' => $tournament->isPrivacy(),
                'capacity' => $tournament->getCapacity(),
                'race' => [
                    'id' => $tournament->getRace()->getId(),
                    'name' => $tournament->getRace()->getName(),
                    'slug' => $tournament->getRace()->getSlug(),
                    'picture' => $tournament->getRace()->getPicture(),
                    'cup' => [
                        'id' => $tournament->getRace()->getCup()->getId(),
                        'name' => $tournament->getRace()->getCup()->getName(),
                        'slug' => $tournament->getRace()->getCup()->getSlug(),
                        'picture' => $tournament->getRace()->getCup()->getPicture(),
                    ],
                ],
                'registered' => $tournament->getRegistered()->map(function ($user) {
                    return [
                        'id' => $user->getId(),
                        'name' => $user->getName(),
                        'picture' => $user->getPicture(),
                        'roles' => $user->getRoles(),
                        'email' => $user->getEmail(),
                    ];
                })->toArray(),
                'user' => [
                    'id' => $tournament->getUser()->getId(),
                    'name' => $tournament->getUser()->getName(),
                    'picture' => $tournament->getUser()->getPicture(),
                    'roles' => $tournament->getUser()->getRoles(),
                    'email' => $tournament->getUser()->getEmail(),   
                ],
                
            ];
        }
        
        // Récupère la liste des courses/coupes
        $races = $raceRepository->findAll();
        $racesData = [];
        foreach ($races as $race) {
            $racesData[] = [
                'id' => $race->getId(),
                'name' => $race->getName(),
                'slug' => $race->getSlug(),
                'picture' => $race->getPicture(),
                'cup' => [
                    'id' => $race->getCup()->getId(),
                    'name' => $race->getCup()->getName(),
                    'slug' => $race->getCup()->getSlug(),
                    'picture' => $race->getCup()->getPicture(),
                ],
            ];
        }

        return $this->render('tournament/index.html.twig', [
            'tournaments' => $eventsData, // Retourne le tableau d'objet des tournois
            'races' => $racesData, // retourne le tableau des courses (Récupère les coupes par relation)
        ]);
    }

    #[Route('/api/tournament/create', name: 'app_tournament_create', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function create(
        Request $request, 
        EntityManagerInterface $manager, 
        Security $security): Response
    {
        $user = $security->getUser();
        
        $event = new Tournament();
        $event
            ->setUser($user)
            ->setCreatedAt(new \DateTimeImmutable())
            ->addRegistered($user);
        
        
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

        return $this->json([
            'event' => [
                'id' => $event->getId(),
            ],
        ]);
    }
}