<?php

namespace App\Controller;

use App\Repository\TournamentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(TournamentRepository $tournamentRepository): Response
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
                'endAt' => $tournament->getEndAt()->format('m/d/Y'),
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

        return $this->render('home/index.html.twig', [
            'tournaments' => $eventsData,
        ]);
    }
}
