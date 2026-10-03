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
    },
    {
      id: "blueprint",
      label: "Blueprint",
      tagline: "Visual scripting Unreal Engine — personnage 3e personne et caméra, Blend Space, niveaux & sublevels, Game Instance/GameMode, UI, structures, interfaces, OOP, materials & VFX.",
      home: "index.html",
      pages: [
        { id: "variables",  title: "1 · Variables & types",         href: "variables-types.html" },
        { id: "personnage", title: "2 · Personnage & Input",        href: "personnage.html" },
        { id: "animbp",     title: "3 · Animation Blueprint",       href: "animation-blueprint.html" },
        { id: "levels",     title: "4 · Levels & Game Framework",   href: "levels-gamemode.html" },
        { id: "ui",         title: "5 · UI, Structs & Interfaces",  href: "ui-structures-interfaces.html" },
        { id: "oop",        title: "6 · Orienté objet",             href: "oop.html" },
        { id: "feedback",   title: "7 · Materials, SFX & VFX",      href: "feedback.html" },
        { id: "physics",    title: "8 · Collisions & physique",     href: "collisions-physique.html" },
        { id: "events",     title: "9 · Fonctions, events & timers", href: "fonctions-events-timers.html" }
      ]
    },
    {
      id: "cpp",
      label: "C++",
      tagline: "Programmation console — variables, décisions, boucles, manipulation de bits.",
      home: "index.html",
      pages: [
        { id: "procedural", title: "1 · Procédural",           href: "procedural.html" },
        { id: "bits",        title: "2 · Manipulation de bits", href: "bit-manipulations.html" }
      ]
    }

  ],
  // Langages prévus mais pas encore écrits
  planned: [
    { id: "lua", label: "Lua" },
    { id: "python", label: "Python" },
    { id: "java", label: "Java" }
  ]
};
