/*
 * Structure du site — SOURCE UNIQUE pour la navigation (menu du haut + génération
 * automatique du sommaire latéral). C'est le seul fichier à modifier pour :
 *   - ajouter une page à un langage existant (un objet dans "pages"),
 *   - ajouter un nouveau langage (un objet dans "languages" + son dossier de pages).
 *
 * Pour ajouter un langage "Python" par exemple :
 *   1. Créer le dossier python/ avec ses pages .html (voir csharp/ comme modèle :
 *      même <div id="topbar"></div>, <aside class="side" id="side"></aside>,
 *      <body data-lang="python" data-page="...">, et les balises <script> de assets/).
 *   2. Ajouter un highlighter dans assets/highlighters/python.js s'il existe une
 *      coloration syntaxique dédiée (sinon le code s'affiche en texte brut).
 *   3. Ajouter un objet ci-dessous : nav.js s'occupe du reste (menu, page active,
 *      sélecteur de langage, sommaire).
 */
window.SITE_CONFIG = {
  brand: "Pas à pas",
  languages: [
    {
      id: "csharp",
      label: "C#",
      tagline: "Procédural, orienté objet, asynchrone — types, collections et rédaction d'UML.",
      home: "index.html",           // page d'accueil du langage (dans son dossier)
      pages: [
        { id: "procedural",  title: "1 · Procédural",     href: "procedural.html" },
        { id: "oo",          title: "2 · Orienté objet",  href: "oriente-objet.html" },
        { id: "async",       title: "3 · Asynchrone",     href: "asynchrone.html" },
        { id: "types",       title: "4 · Types & UML",    href: "types-collections-uml.html" }
      ]
    },
    {
      id: "php",
      label: "PHP",
      tagline: "PHP pur, sans framework — procédural, orienté objet, concurrence, types et UML.",
      home: "index.html",
      pages: [
        { id: "procedural",  title: "1 · Procédural",     href: "procedural.html" },
        { id: "oo",          title: "2 · Orienté objet",  href: "oriente-objet.html" },
        { id: "concurrence", title: "3 · Concurrence",    href: "concurrence.html" },
        { id: "types",       title: "4 · Types & UML",    href: "types-collections-uml.html" },
        { id: "backend",     title: "5 · Backend & MVC",  href: "backend.html" }
      ]
    }
    // { id: "python", label: "Python", home: "index.html", pages: [ ... ] }
  ]
};
