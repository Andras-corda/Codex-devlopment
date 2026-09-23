# Codex

Site statique **multi-langage** (100 % HTML/CSS/JS, aucune dépendance, aucun build) : un
**aide-mémoire personnel** de programmation, pas un guide — ce que j'ai appris et retenu au fil
du temps (algorithmes, syntaxe, façons de structurer un projet), par langage. Thème repris du
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
csharp/                           dossier du langage C#
  index.html, procedural.html, oriente-objet.html, asynchrone.html,
  types-collections-uml.html, wpf.html (XAML, binding, MVVM)
php/                               dossier du langage PHP (pur, sans framework)
  index.html, procedural.html, oriente-objet.html, concurrence.html,
  types-collections-uml.html, backend.html (PDO, formulaires, pattern MVC, sécurité),
  composer-symfony.html (Composer, Faker, quand passer à Symfony)
```

Rien n'est codé en dur deux fois :
- la barre du haut affiche uniquement la nav **de la page courante** (pas de sélecteur de langage dedans) — **générée** par `nav.js` à partir de `site.config.js` ; pour changer de langage, le logo « Codex » ramène à l'accueil, qui liste tous les langages ;
- le **sommaire latéral** de chaque page est **généré automatiquement** à partir des `<h2 id="...">` de son `<main>` — aucune liste à maintenir. Un `<h2 data-group="Nom du groupe">` crée un sous-titre dans le sommaire (voir `csharp/types-collections-uml.html`) ;
- la **coloration syntaxique** passe par un registre (`window.CodeHighlighters`) : chaque langage enregistre sa propre fonction dans son fichier sous `assets/highlighters/`, sans toucher au moteur commun (`main.js`).

## Ajouter un langage

1. Créer un dossier `nom-du-langage/` avec ses pages `.html`. Copier une page de `csharp/` comme modèle :
   - `<link rel="stylesheet" href="../assets/style.css">`
   - `<body data-lang="nom-du-langage" data-page="identifiant-de-page">` (omettre `data-page` sur la page d'accueil du langage)
   - `<div class="topbar" id="topbar"></div>` et `<aside class="side" id="side"></aside>` (vides — remplis par `nav.js`)
   - le contenu dans `<main>…</main>`, avec des `<h2 id="...">` pour chaque section
   - en bas : `<script src="../assets/site.config.js">`, un highlighter si besoin, `main.js`, puis `nav.js`
2. (optionnel) Ajouter `assets/highlighters/nom-du-langage.js` s'il existe une coloration dédiée ; sinon le code s'affiche en texte brut.
3. Ajouter un objet dans `assets/site.config.js` (`languages: [...]`) avec son `id`, `label`, `tagline`, `home` et la liste de ses `pages`.

C'est tout : la page d'accueil du site, la barre de navigation et le sélecteur de langage se mettent à jour automatiquement.

Un langage pas encore écrit peut être annoncé sur l'accueil (carte grisée « à venir ») en
l'ajoutant simplement au tableau `planned` de `assets/site.config.js` — le basculer dans
`languages` une fois ses pages prêtes.

## Ajouter une page à un langage existant

Ajouter le fichier `.html` (même modèle) et une entrée dans le tableau `pages` du langage concerné, dans `assets/site.config.js`.

## Aperçu local

```bash
python -m http.server 4173
```

Un serveur local est recommandé (le bouton « Copier » utilise le presse-papiers, indisponible
sur certains navigateurs en `file://`) ; les pages restent lisibles sans serveur sinon.

## Publier sur GitHub Pages

```bash
git init
git add .
git commit -m "Site Codex"
git branch -M main
git remote add origin https://github.com/<utilisateur>/<repo>.git
git push -u origin main
```

Puis **Settings → Pages → Source : Deploy from a branch → `main` / `root`**.
Le site sera sur `https://<utilisateur>.github.io/<repo>/`.
Le fichier `.nojekyll` désactive le traitement Jekyll.
