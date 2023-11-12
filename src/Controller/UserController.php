<?php

namespace App\Controller;

use App\Utils\DataUtils;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('api/user', name: 'api_user', methods: ['GET'])]
    public function user()
    {
        // Récupération de l'utilisateur connecté en objet pour React
        $user = $this->isGranted('ROLE_USER') ? DataUtils::getUserData($this->getUser()) : null;

        return $this->json([
            'user' => $user
        ]);
    }
}