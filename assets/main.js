/* Moteur générique des blocs de code : boutons "Copier" + coloration syntaxique.
   Ne connaît AUCUN langage — il délègue à window.CodeHighlighters[data-lang], un
   registre alimenté par assets/highlighters/<langage>.js (voir csharp.js). Un
   data-lang sans highlighter enregistré s'affiche simplement en texte échappé.
   Le chrome de navigation (menu, sommaire) vit dans assets/nav.js. */
(function () {
  "use strict";

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function buildBlocks() {
    document.querySelectorAll("pre.code").forEach(function (pre) {
      var holder = pre.querySelector('script[type="text/plain"]');
      if (!holder) return;
      var src = holder.textContent.replace(/^\n/, "").replace(/\s+$/, "");
      var lang = pre.getAttribute("data-lang") || "csharp";
      var highlighter = window.CodeHighlighters && window.CodeHighlighters[lang];

      pre.innerHTML =
        '<div class="bar"><span>' + esc(lang) + '</span>' +
        '<button class="copy" type="button">Copier</button></div>' +
        "<code>" + (highlighter ? highlighter(src) : esc(src)) + "</code>";

      pre.querySelector(".copy").addEventListener("click", function () {
        var b = this;
        navigator.clipboard.writeText(src).then(function () {
          b.textContent = "Copié";
          setTimeout(function () { b.textContent = "Copier"; }, 1400);
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", buildBlocks);
})();
