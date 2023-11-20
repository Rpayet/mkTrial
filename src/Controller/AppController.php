<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route(path: '/{reactRouting}', name:'index', defaults: ['reactRouting' => null], requirements: ['reactRouting' => '^(?!api|_(profiler|wdt)).*'])]
    public function index()
    {
        return $this->render('base.html.twig');
    }
}
