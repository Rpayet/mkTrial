<?php

use App\Entity\Cup;
use App\Entity\Race;

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

$feather = ['tba', 'tba', 'tba', 'tba'];
$cherry = ['tba', 'tba', 'tba', 'tba'];
$acorn = ['tba', 'tba', 'tba', 'tba'];
$spiny = ['tba', 'tba', 'tba', 'tba'];

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
    ->setPicture($enCupName.'_0'.($indexRace + 1).'.jpg')
;
$cup->addRace($race);
$races[]= $race;
$manager->persist($race);
}

$manager->persist($cup);
}

?>