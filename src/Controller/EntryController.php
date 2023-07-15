<?php

namespace App\Controller;

use App\Entity\Entry;
use App\Repository\EntryRepository;
use App\Repository\TournamentRepository;
use App\Utils\DataUtils;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class EntryController extends AbstractController
{
    #[Route('api/event/{id}/entry', name: 'api_entry', methods: ['GET'])]
    public function entry(EntryRepository $entryRepository, int $id)
    {
        // Entries
        $entries = $entryRepository->findBy(array('tournament' => $id));
        $entryData = array_map([DataUtils::class, 'getEntryData'], $entries);
        
        return $this->json([
            'entries' => $entryData
        ]);
    }

    #[Route('/api/event/{id}/addEntry', name: 'app_event_entry_add', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function addEntry(
        Request $request,
        $id,
        EntityManagerInterface $manager, 
        Security $security, 
        TournamentRepository $tournamentRepository ) 
            {
                $user = $security->getUser();
                $event = $tournamentRepository->find($id);

                $time = $request->request->get('time');

                $imageFile = $request->files->get('picture');

                $entry = new Entry();
                $entry
                    ->setUser($user)
                    ->setCreatedAt(new \DateTimeImmutable())
                    ->setTournament($event)
                    ->setTime($time);

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

                // $imageFile = $request->files->get('picture'); retourner le nom de l'image stocker dans la variable $imageFile
                return $this->json(['success' => true]);

                
            }

    #[Route('api/entry/{id}/delete', name: 'api_entry', methods: ['DELETE'])]
    public function update(
        EntryRepository $entryRepository,
        int $id,
        EntityManagerInterface $manager
        )
            {               
                // Récupère l'entrée avec l'ID
                $entry = $entryRepository->find($id);
                
                // Supprimer l'image associée à l'entrée
                $imageFilename = $entry->getPicture();
                if ($imageFilename) {
                    $imagePath = $this->getParameter('kernel.project_dir') . '/public/assets/user/entries/' . $imageFilename;

                    // Vérifier si le fichier existe avant de le supprimer
                    if (file_exists($imagePath)) {
                        unlink($imagePath);
                    }
                }

                // Supprimer l'entrée
                $manager->remove($entry);
                $manager->flush();

                return $this->json(['data' => 'success']);
            }


}