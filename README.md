# Codex

Site statique **multi-langage** (100 % HTML/CSS/JS sans aucune dépendance) : un **aide-mémoire personnel** de programmation, pas un guide. Il résume ce que j'ai appris et retenu au fil du temps (algorithmes, syntaxe, façons de structurer un projet), par langage. Thème repris du
mode sombre de GitHub, schémas SVG, code coloré.

## Architecture

```
index.html                        accueil du site — sélecteur de langage (généré depuis site.config.js)
assets/
  style.css                       thème (langage-agnostique)
  site.config.js                  SOURCE UNIQUE de la navigation : langages + pages
  nav.js                          construit la barre du haut et le sommaire latéral depuis site.config.js ; gère aussi les info-bulles (data-tip)
  main.js                         moteur des blocs de code (boutons Copier) + registre de coloration
  gifs/                           animations explicatives (GIF) qui remplacent certains schémas
  NodeUnreal/                     captures d'écran de nœuds et de panneaux Unreal
  screenDuMoteur/                 captures du viewport de l'éditeur Unreal
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
  personnage.html (Character, Pawn & possession, caméra, Enhanced Input, collisions),
  animation-blueprint.html (Blend Space, ABP, Layered blend, cached poses, notifies, retargeting Mixamo),
  levels-gamemode.html
  (GameMode/GameState/PlayerState, PlayerStart, GameInstance, SaveGame, Open Level, méthodes de streaming,
  niveaux & sublevels, Level Blueprint),
  ui-structures-interfaces.html (Widget Blueprint/UMG, structures, interfaces, enums),
  oop.html (héritage, polymorphisme, classes abstraites, hiérarchie des acteurs),
  feedback.html (Dynamic Material Instance, SFX, VFX Niagara/Cascade),
  collisions-physique.html (canaux & presets custom, traces, simulation, ragdoll, Physical Material),
  fonctions-events-timers.html (fonctions, events, dispatcher/handler, macros, timers, frame suivante)
cpp/                                dossier du langage C++ (console)
  index.html (compilateur/linker, IDE, anatomie du premier programme),
  procedural.html (variables, const/constexpr, types, portée, opérateurs, ++/--, décisions, boucles,
  procédures & fonctions),
  bit-manipulations.html (littéraux, masques, packing de nibbles)
```

## Info-bulles

Tout élément portant un attribut `data-tip` affiche une info-bulle au survol (et au focus clavier, ou au tap sur écran tactile) — aucune configuration par page, c'est géré par `nav.js` et `style.css` :

```html
<code data-tip="Le fil blanc : l'ordre d'exécution, pas une valeur.">Exec</code>
<code data-tip="Vrai ou faux." data-tip-title="Boolean">Boolean</code>
<code data-tip="Le nœud Branch" data-tip-img="../assets/img/branch.png" data-tip-alt="Nœud Branch">Branch</code>
```

- `data-tip` : le texte (texte brut ; un retour à la ligne s'écrit `&#10;`). Un `data-tip=""` vide réserve l'emplacement : rien ne s'affiche tant qu'il n'est pas rempli.
- `data-tip-title` (facultatif) : un titre en gras au-dessus du texte.
- `data-tip-img` / `data-tip-alt` (facultatifs) : une image (capture d'un nœud) au-dessus du texte.
- Les éléments annotés sont soulignés en pointillés ; `Échap` ferme l'info-bulle.

Tableau à ajouter