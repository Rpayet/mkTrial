<?php

namespace App\Controller;

use App\Entity\Tournament;
use App\Form\EventType;
use App\Repository\TournamentRepository;
use App\Utils\DataUtils;
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
    public function index(): Response
    {        
        return $this->render('tournament/index.html.twig', []);
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

    #[Route('/api/tournament/list', name: 'app_tournament_list', methods: ['GET'])]
    public function list(TournamentRepository $tournamentRepository): Response
    {
        // Pour récupérer la liste complète des Tournois
        $tournaments = $tournamentRepository
                    ->createQueryBuilder('t')
                    ->where('t.endAt >= :today', 't.pinCode IS NULL')
                    ->setParameter('today', new \DateTime())
                    ->orderBy('t.endAt', 'ASC')
                    ->getQuery()
                    ->getResult();

        $data = array_map([DataUtils::class, 'getEventData'], $tournaments);

        return $this->json($data);
    }

}