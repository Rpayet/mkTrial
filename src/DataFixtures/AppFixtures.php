<?php

namespace App\DataFixtures;

use App\Entity\Cup;
use App\Entity\Entry;
use App\Entity\Race;
use App\Entity\Tournament;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Faker\Factory as FakerFactory;
use App\Utils\DataUtils;

class AppFixtures extends Fixture
{
    private $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher= $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = FakerFactory::create('fr_FR');
    
        $users = [];
        $races = [];
       
        $cups = ['champignon', 'fleur', 'étoile', 'spéciale', 
                'œuf', 'crossing', 'carapace', 'banane', 
                'feuille', 'éclair', 'triforce', 'clochette',
                'turbodorée', 'manekineko', 'navet', 'hélico',
                'pierre', 'lune', 'fruit', 'boomerang',
                'plume', 'cerises', 'gland', 'épines' ];

        $cups_en = ['mushroom', 'flower', 'star', 'special',
                    'egg', 'crossing', 'shell', 'banana',
                    'leaf', 'lightning', 'triforce', 'bell',
                    'goldendash', 'luckycat', 'turnip', 'propeller',
                    'rock', 'moon', 'fruit', 'boomerang',
                    'feather', 'cherry', 'acorn', 'spiny' ];
        
        $mushroom = ['champidrome', 'parc glougloop', 'piste aux délices', 'temple thwomp'];
        $flower = ['circuit mario', 'promenade toad', 'manoir trempé', 'cascades maskass'];
        $star = ['aéroport azur', 'lagon tourbillon', 'club mario', 'descente givrée'];
        $special = ['voie céleste', 'désert toussec', 'château de bowser', 'route arc-en-ciel'];

        $egg = ['circuit yoshi', 'arène d\'excitebike', 'route du dragon', 'mute city'];
        $crossing = ['parc baby', 'pays fromage', 'passage feuillage', 'animal crossing'];
        $shell =['prairie meuh meuh', 'circuit mario [gba]', 'plage cheep cheep', 'autoroute toad'];
        $banana = ['désert sec sec', 'plaine donut', 'autodrome royal', 'forêt tropicale DK'];

        $leaf = ['stade wario', 'royaume sorbet', 'piste musicale', 'vallée yoshi'];
        $lightning = ['horloge tic-tac', 'égout piranha', 'volcan grondant', 'route arc-en-ciel [n64]'];
        $triforce = ['mine wario', 'route arc-en-ciel [snes]', 'station glagla', 'circuit d\'hyrule'];
        $bell = ['koopapolis', 'route ruban', 'métro turbo', 'big blue'];

        $goldendash = ['promenade à paris', 'circuit toad', 'montagne choco', 'supermarché coco'];
        $luckycat = ['traversée de tokyo', 'corniche champignon', 'jardin volant', 'dojo ninja'];
        $turnip = ['escapade new-yorkaise', 'circuit mario [smk]', 'désert kalimari', 'flipper waluigi'];
        $propeller = ['sprint à sydney', 'pays neigeux', 'gorge champignon', 'cité sorbet'];

        $rock = ['détour à londres', 'lac boo', 'mont éboulis', 'bois vermeil'];
        $moon = ['balade berlinoise', 'jardin peach', 'mont festif', 'route arc-en-ciel [mk7]'];
        $fruit = ['virée à amsterdam', 'riverside parc', 'pic dk', 'île de yoshi'];
        $boomerang = ['bousculade à bangkok', 'circuit mario [ds]', 'stade waluigi', 'poursuite à singapour'];

        $feather = ['athènes antique', 'paquebot daisy', 'route clair de lune', 'course à la propreté'];
        $cherry = ['road-trip à los angeles', 'pays crépuscule', 'cap koopa', 'virages à vancouver'];
        $acorn = ['roma romantica', 'montagne dk', 'circuit daisy', 'ruines plante piranha'];
        $spiny = ['méandres madrilènes', 'monde glacé d\'harmonie', 'château de bowser 3', 'route arc-en-ciel [wii]'];
     

        // Pour remplir les tables Cup et Race
        foreach ($cups as $index => $cupName) {
            $enCupName = $cups_en[$index];
            $cup = new Cup();
            $cup->setName($cupName)
                ->setSlug($enCupName)
                ->setPicture($enCupName.'_icon.png');

            foreach ($$enCupName as $indexRace => $raceName) {
                $race = new Race();
                $race->setName($raceName)
                    ->setSlug($enCupName.'_0'.($indexRace + 1))
                    ->setPicture($enCupName.'_0'.($indexRace + 1).'.jpg');
                $cup->addRace($race);
                $races[]= $race;
                $manager->persist($race);
            }
            
            $manager->persist($cup);
        }

        // Collection de faux Utilisateurs
        for ($i =0; $i < 10; $i++) {
           
            $user = new User();
            $user->setName($faker->firstName())
                ->setEmail($faker->email())
                ->setPassword('password')
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-10 days', 'now')))
                ->setPicture(null);

            $manager->persist($user);
            $users[] = $user;
        }

        // Collection de faux évènements
        for ($i=0; $i < 50 ; $i++) { 
            $race = $races[array_rand($races)];
            $user = $users[array_rand($users)];
            $eventName = DataUtils::eventNameRandomizer();

            $tournament = new Tournament();
            $tournament->setName($eventName)
                ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-30 days', 'now')))
                ->setEndAt($faker->dateTimeBetween(\DateTime::createFromImmutable($tournament->getCreatedAt()), '+30 days'))
                ->setRace($race)
                ->setUser($user)
                ->addRegistered($user)
                ->setCapacity(null)
                ->setSpeed(rand(0, 1) == 0 ? '150cc' : '200cc')
                ->setPincode(null);
                        
            for ($j=0; $j < rand(6,12) ; $j++) { 
                $entry = new Entry();
                $entry ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween(\DateTime::createFromImmutable($tournament->getCreatedAt()), $tournament->getEndAt())))
                    -> setTime($faker->numberBetween(50000, 120000))
                    -> setUser($users[array_rand($users)])
                    -> setPicture('6457bb70c3e8e.jpg');

                $tournament ->addEntry($entry);
                $manager ->persist($entry);
           }

           $manager -> persist($tournament);
            
        }       

        $manager->flush();
    }
}
