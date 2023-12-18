<?php

namespace App\Utils;

use App\Entity\Cup;
use App\Entity\User;
use App\Entity\Entry;
use App\Entity\Race;
use App\Entity\Tournament;

class DataUtils
{
    public static function getRaceData(Race $race): array
    {
        return [
            'id' => $race->getId(),
            'name' => $race->getName(),
            'slug' => $race->getSlug(),
            'picture' => $race->getPicture(),
            'cup' => self::getCupData($race->getCup()),
        ];
    }

    public static function getCupData(Cup $cup): array
    {
        return [
            'id' => $cup->getId(),
            'name' => $cup->getName(),
            'slug' => $cup->getSlug(),
            'picture' => $cup->getPicture(),
        ];
    }
    
    public static function getUserData(User $user): array
    {
        return [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'picture' => $user->getPicture(),
            'roles' => $user->getRoles(),
            'email' => $user->getEmail(),
        ];
    }

    public static function getEntryData(Entry $entry): array
    {
        return [
            'id' => $entry->getId(),
            'user' => self::getUserData($entry->getUser()),
            'time' => $entry->getTime(),
            'createdAt' => $entry->getCreatedAt(),
            'picture' => $entry->getPicture(),
        ];
    }

    public static function getEventData(Tournament $event): array
    {
        $data = [
            'id' => $event->getId(),
            'name' => $event->getName(),
            'createdAt' => $event->getCreatedAt()->format('Y-m-d'),
            'endAt' => $event->getEndAt()->format('Y-m-d'),
            'speed' => $event->getSpeed(),
            'capacity' => $event->getCapacity(),
            'registered' => $event->getRegistered()->map(function ($user) {
                return self::getUserData($user);
            })->toArray(),
            'user' => self::getUserData($event->getUser()),
            'race' => self::getRaceData($event->getRace()),
            'pinCode' => $event->getPinCode(),
        ];
    
        // Vérifie si hourEnd est null avant de l'ajouter au tableau
        if ($event->getHourEnd() !== null) {
            $data['hourEnd'] = $event->getHourEnd()->format('H:i');
        } else {
            $data['hourEnd'] = null;
        }
    
        return $data;
    }

    public static function eventNameRandomizer(): string
    {
        $firstWord = ['ultra', 'retro', 'star', 'banana', 'virtual',
                    'bonus', 'bobomb', 'jungle', 'slam', 'master',
                    'super', 'club', 'power', 'warp', 'burning',
                    'pow', 'mega', 'luma', 'chomp', 'hero',
                    'comet', 'double', 'fuzzy', 'shroom', 
                    'crazy', 'jump', 'lucky', 'magic'];
    
        $secondWord = ['jam', 'team', 'bros', 'saga', 'world',
                    'fury', 'plus', 'classic', 'special', 'charged',
                    'clash', 'land', 'deluxe', 'fever', 'striker',
                    'league', 'rush', 'party', 'mix', 'melee',
                    'dash', 'fresh', 'shell', 'smasher',
                    'barrel', 'punch', 'machine', 'blast'];
        
        $randomFirstWord = $firstWord[random_int(0, count($firstWord) - 1)];
        $randomSecondWord = $secondWord[random_int(0, count($secondWord) - 1)];
        $randomName = strtoupper(substr($randomFirstWord, 0, 1))
                    .substr($randomFirstWord, 1)
                    .' '
                    .strtoupper(substr($randomSecondWord, 0, 1))
                    .substr($randomSecondWord, 1);
    
        return $randomName;
    }
}