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
            'createdAt' => $entry->getCreatedAt()->format('Y-m-d'),
            'picture' => $entry->getPicture(),
        ];
    }

    public static function getEventData(Tournament $event): array
    {
        return [
            'id' => $event->getId(),
            'name' => $event->getName(),
            'createdAt' => $event->getCreatedAt()->format('m/d/Y'),
            'endAt' => $event->getEndAt()->format('m/d/Y'),
            'speed' => $event->getSpeed(),
            'privacy' => $event->isPrivacy(),
            'capacity' => $event->getCapacity(),
            'registered' => $event->getRegistered()->map(function ($user) {
                return self::getUserData($user);
            })->toArray(),
            'user' => self::getUserData($event->getUser()),
            'race' => self::getRaceData($event->getRace()),
        ];
    }

}