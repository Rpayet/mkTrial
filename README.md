1 - Les bases

Pour gérer les pages d'erreurs
```bash
composer require symfony/twig-pack
```

Pack Doctrine ORM
```bash
composer require symfony/orm-pack
```

Install Symfony Encore Bundle
```bash
composer require symfony/webpack-encore-bundle
```

A faire après le Setup de Encore
```bash
npm install
```

Intégrer Tailwind : https://tailwindcss.com/docs/guides/symfony

Si besoin de React
```bash
composer require symfony/ux-react
npm install
npm run dev-server
```

Faker
```bash
composer require fakerphp/faker
```

2 - Clone GitHub

Quand on a cloné le projet, on installe les dépendances avec Composer :

```bash
composer install
```

On configure le fichier `.env.local`. On peut donc créer la BDD :

```bash
php bin/console doctrine:database:create
```

Attention de bien lancer le serveur MySQL ou Laragon. Et bien sûr, on peut lancer les migrations pour être sûr que notre BDD est synchronisée avec le projet :

```bash
php bin/console make:migration
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
```



Ne pas oublier de compiler le CSS et le JS
Compile une seule fois
```bash
npm run dev
```

Pour compiler à chaque modifications

```bash
npm run watch
```

Pour compiler à chaque modification et refresh automatique

```bash
npm run dev-server
```