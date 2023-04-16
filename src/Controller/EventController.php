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
        $event = $repository->find($id);

        if (!$event) {
            throw $this->createNotFoundException();
        }

        return $this->render('event/index.html.twig', [
            'event' => $event,
        ]);
    }

}
