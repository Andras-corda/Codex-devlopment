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
    cpp.js                        coloration syntaxique C++ (idem, + directives préprocesseur #include)
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
blueprint/                         dossier Blueprint (Unreal Engine)
  index.html (Blueprint en bref, Branch/Switch, boucles, Timelines, Array/Set/Map,
  events/fonctions/macros/collapsed, Event Dispatchers),
  variables-types.html (chaque type de variable, Actor Tags & Gameplay Tags),
  personnage.html (Character, caméra, Enhanced Input, collisions),
  animation-blueprint.html (Blend Space, ABP), levels-gamemode.html
  (GameMode, GameInstance, niveaux & sublevels, Level Blueprint),
  ui-structures-interfaces.html (Widget Blueprint/UMG, structures, interfaces, enums)
cpp/                                dossier du langage C++ (console)
  index.html (compilateur/linker, IDE, anatomie du premier programme),
  procedural.html (variables, const/constexpr, types, portée, opérateurs, ++/--, décisions, boucles,
  procédures & fonctions),
  bit-manipulations.html (littéraux, masques, packing de nibbles)
```

Tableau à ajouter