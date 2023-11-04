<?php

namespace App\Controller;

use App\Repository\RaceRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\DataUtils;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RaceController extends AbstractController
{
    #[Route('/api/race/list', name: 'app_race_list', methods: ['GET'])]
    public function raceList(RaceRepository $raceRepository): Response
    {        
        // Récupère la liste des courses/coupes
        $races = $raceRepository->findAll();
        $racesData = array_map([DataUtils::class, 'getRaceData'], $races);        

        return $this->json($racesData);
    }
}


