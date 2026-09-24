(function () {
  "use strict";

  var BRAND_SVG =
    '<svg height="22" width="22" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>';

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function findLanguage(cfg, langId) {
    return cfg.languages.filter(function (l) { return l.id === langId; })[0] || null;
  }

  function renderTopbar(cfg) {
    var el = document.getElementById("topbar");
    if (!el) return;

    var langId = document.body.getAttribute("data-lang");
    var pageId = document.body.getAttribute("data-page");
    var root = langId ? "../" : "";
    var lang = langId ? findLanguage(cfg, langId) : null;

    // Le header ne montre que la nav de la page courante 
    var html = '<button class="menu-btn" aria-label="Menu">☰</button>' +
      '<a class="brand" href="' + root + 'index.html">' + BRAND_SVG + esc(cfg.brand) + "</a>";

    if (lang) {
      html += '<span class="topbar-lang">' + esc(lang.label) + '</span>';
      html += "<nav>";
      html += '<a href="' + lang.home + '"' + (!pageId ? ' class="active"' : "") + ">Accueil</a>";
      lang.pages.forEach(function (p) {
        html += '<a href="' + p.href + '"' + (pageId === p.id ? ' class="active"' : "") + ">" + esc(p.title) + "</a>";
      });
      html += "</nav>";
    }

    el.innerHTML = html;

    var btn = el.querySelector(".menu-btn");
    var side = document.getElementById("side");
    if (btn && side) {
      btn.addEventListener("click", function () { side.classList.toggle("open"); });
      side.addEventListener("click", function (e) {
        if (e.target.tagName === "A") side.classList.remove("open");
      });
    } else if (btn) {
      btn.style.visibility = "hidden";
    }
  }

  // Sidebar latéral généré depuis les <h2 id="..."> de <main>
  function renderSidebar() {
    var side = document.getElementById("side");
    if (!side) return;
    var heads = [].slice.call(document.querySelectorAll("main h2[id]"));
    if (!heads.length) { side.remove(); return; }

    var html = "", currentGroup = null;
    heads.forEach(function (h) {
      var group = h.getAttribute("data-group");
      if (group !== currentGroup) {
        if (group) html += "<h4>" + esc(group) + "</h4>";
        currentGroup = group;
      }
      html += '<a href="#' + h.id + '">' + esc(h.textContent.trim()) + "</a>";
    });
    side.innerHTML = html;

    var links = [].slice.call(side.querySelectorAll("a[href^='#']"));
    var map = {};
    links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove("active"); });
        if (map[e.target.id]) map[e.target.id].classList.add("active");
      });
    }, { rootMargin: "-64px 0px -75% 0px" });
    heads.forEach(function (h) { obs.observe(h); });
  }

  // Page d'accueil du site
  function renderLangGrid(cfg) {
    var grid = document.getElementById("lang-grid");
    if (!grid) return;
    var html = "";
    cfg.languages.forEach(function (l) {
      html += '<a class="lang-card" href="' + l.id + "/" + l.home + '">' +
        '<div class="lang-name">' + esc(l.label) + "</div>" +
        '<div class="lang-desc">' + esc(l.tagline || "") + "</div></a>";
    });
    (cfg.planned || []).forEach(function (l) {
      html += '<div class="lang-card lang-card-planned">' +
        '<div class="lang-name">' + esc(l.label) + ' <span class="lang-soon">à venir</span></div>' +
        '<div class="lang-desc">pas encore écrit</div></div>';
    });
    grid.innerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var cfg = window.SITE_CONFIG;
    if (!cfg) return;
    renderTopbar(cfg);
    renderSidebar();
    renderLangGrid(cfg);
  });
})();
