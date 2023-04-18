<?php

namespace App\Controller;

use App\Entity\Tournament;
use App\Repository\TournamentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{
    #[Route('/event/{id}', name: 'app_event')]
    public function index(TournamentRepository $repository, int $id): Response
    {
        // Récupère l'événement avec l'ID
        $event = $repository->find($id);

        // Si l'événement n'existe pas => 404.
        if (!$event) {
            throw $this->createNotFoundException();
        }

        // Objet lisible pou React
        $data = [
            'id' => $event->getId(),
            'name' => $event->getName(),
            'createdAt' => $event->getCreatedAt(),
            'endAt' => $event->getEndAt(),
            'speed' => $event->getSpeed(),
            'privacy' => $event->isPrivacy(),
            'capacity' => $event->getCapacity(),
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

        return $this->render('event/index.html.twig', [
            'event' => $data,
        ]);
    }

}
