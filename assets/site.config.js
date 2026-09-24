window.SITE_CONFIG = {
  brand: "Codex",
  languages: [
    {
      id: "csharp",
      label: "C#",
      tagline: "Procédural, orienté objet, asynchrone — types, collections et rédaction d'UML.",
      home: "index.html",
      pages: [
        { id: "procedural",  title: "1 · Procédural",     href: "procedural.html" },
        { id: "oo",          title: "2 · Orienté objet",  href: "oriente-objet.html" },
        { id: "async",       title: "3 · Asynchrone",     href: "asynchrone.html" },
        { id: "types",       title: "4 · Types & UML",    href: "types-collections-uml.html" },
        { id: "wpf",         title: "5 · WPF",             href: "wpf.html" }
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
        { id: "backend",     title: "5 · Backend & MVC",  href: "backend.html" },
        { id: "composer",    title: "6 · Composer & Symfony", href: "composer-symfony.html" }
      ]
    },
    {
      id: "javascript",
      label: "JavaScript",
      tagline: "Bots Discord, apps Electron, backend Node.js — animations et style de pages.",
      home: "index.html",
      pages: [
        { id: "discord",   title: "1 · Bot Discord",         href: "discord-bot.html" },
        { id: "electron",  title: "2 · Apps Electron",         href: "electron.html" },
        { id: "backend",   title: "3 · Backend de sites web",  href: "backend.html" },
        { id: "animations", title: "4 · Animations & style",   href: "animations.html" }
      ]
    }
  
  ],
  // Langages prévus mais pas encore écrits 
  planned: [
    { id: "lua", label: "Lua" },
    { id: "python", label: "Python" },
    { id: "java", label: "Java" },
    { id: "cpp", label: "C++" }
  ]
};
