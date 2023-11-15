<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route(path: '/{reactRouting}', name:'index', defaults: ['reactRouting' => null], requirements: ['reactRouting' => '^(?!api|_(profiler|wdt)).*'])]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}
