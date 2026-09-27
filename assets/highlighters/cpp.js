/* Coloration syntaxique C++. Même registre que csharp.js / php.js / javascript.js (voir assets/main.js). */
(function () {
  "use strict";

  var KW = new Set(("int double float bool char void const constexpr if else switch case default break continue for while do " +
    "return enum class struct using namespace static unsigned signed short long true false nullptr sizeof new delete " +
    "this public private protected virtual override final friend template typename auto extern inline union typedef " +
    "goto try catch throw operator explicit mutable volatile register uint8_t uint16_t uint32_t uint64_t int8_t " +
    "int16_t int32_t int64_t size_t wchar_t").split(" "));

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Même principe que les autres highlighters : un seul passage, jamais de re-lecture du HTML injecté.
  function highlightPlain(s) {
    var re = /([A-Za-z_][A-Za-z0-9_]*)|(0[xX][0-9a-fA-F]+|0[bB][01]+|\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?[fFlLuU]*)|(\s+)|([^A-Za-z0-9_\s]+)/g;
    var out = "", m;
    while ((m = re.exec(s))) {
      if (m[1]) {
        var w = m[1];
        if (KW.has(w)) out += '<span class="tok-kw">' + w + "</span>";
        else if (/^[A-Z]/.test(w)) out += '<span class="tok-type">' + w + "</span>";
        else if (/^\s*\(/.test(s.slice(re.lastIndex))) out += '<span class="tok-fn">' + w + "</span>";
        else out += w;
      } else if (m[2]) {
        out += '<span class="tok-num">' + m[2] + "</span>";
      } else if (m[3]) {
        out += m[3];
      } else {
        out += esc(m[4]);
      }
    }
    return out;
  }

  function highlight(src) {
    // comment | chaîne/caractère | #include <en-tête> (les deux coloriés séparément) | directive préprocesseur seule
    var re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)')|(#include\s*<[^>\n]*>)|(#[A-Za-z_]+)/g;
    var out = "", last = 0, m;
    while ((m = re.exec(src))) {
      out += highlightPlain(src.slice(last, m.index));
      if (m[1]) out += '<span class="tok-com">' + esc(m[1]) + "</span>";
      else if (m[2]) out += '<span class="tok-str">' + esc(m[2]) + "</span>";
      else if (m[3]) {
        var lt = m[3].indexOf("<");
        out += '<span class="tok-kw">' + esc(m[3].slice(0, lt)) + '</span><span class="tok-str">' + esc(m[3].slice(lt)) + "</span>";
      } else out += '<span class="tok-kw">' + esc(m[4]) + "</span>";
      last = m.index + m[0].length;
    }
    out += highlightPlain(src.slice(last));
    return out;
  }

  window.CodeHighlighters = window.CodeHighlighters || {};
  window.CodeHighlighters.cpp = highlight;
})();
