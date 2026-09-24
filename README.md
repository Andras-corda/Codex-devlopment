# Codex

Site statique **multi-langage** (100 % HTML/CSS/JS sans aucune dépendance) : un **aide-mémoire personnel** de programmation, pas un guide. Il résume ce que j'ai appris et retenu au fil du temps (algorithmes, syntaxe, façons de structurer un projet), par langage. Thème repris du
mode sombre de GitHub, schémas SVG, code coloré.

## Architecture

```
index.html                        accueil du site — sélecteur de langage (généré depuis site.config.js)
assets/
  style.css                       thème (langage-agnostique)
  site.config.js                  SOURCE UNIQUE de la navigation : langages + pages
  nav.js                          construit la barre du haut et le sommaire latéral depuis site.config.js
  main.js                         moteur des blocs de code (boutons Copier) + registre de coloration
  highlighters/
    csharp.js                     coloration syntaxique C#, enregistrée dans le registre de main.js
    php.js                        coloration syntaxique PHP (mêmes principes, $variables en plus)
    javascript.js                  coloration syntaxique JS (idem, + template literals)
csharp/                           dossier du langage C#
  index.html, procedural.html, oriente-objet.html, asynchrone.html,
  types-collections-uml.html, wpf.html (XAML, binding, MVVM)
php/                               dossier du langage PHP (pur, sans framework)
  index.html, procedural.html, oriente-objet.html, concurrence.html,
  types-collections-uml.html, backend.html (PDO, formulaires, pattern MVC, sécurité),
  composer-symfony.html (Composer, Faker, quand passer à Symfony)
javascript/                        dossier du langage JavaScript (Node.js)
  index.html (Node, npm, modules), discord-bot.html, electron.html,
  backend.html (Express), animations.html (CSS + JS)
```

Tableau à ajouter