/* Coloration syntaxique JavaScript. Même registre que csharp.js / php.js (voir assets/main.js). */
(function () {
  "use strict";

  var KW = new Set(("break case catch class const continue debugger default delete do else export extends " +
    "finally for function if import in instanceof let new return static super switch this throw try typeof " +
    "var void while with yield async await of from as null true false undefined new").split(" "));

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Même principe que les autres highlighters : un seul passage, jamais de re-lecture du HTML injecté.
  function highlightPlain(s) {
    var re = /([A-Za-z_$][A-Za-z0-9_$]*)|(0[xXbBoO][0-9a-fA-F]+|\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?n?)|(\s+)|([^A-Za-z0-9_$\s]+)/g;
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
    // comment | chaîne simple/double | template littéral (backtick)
    var re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)/g;
    var out = "", last = 0, m;
    while ((m = re.exec(src))) {
      out += highlightPlain(src.slice(last, m.index));
      if (m[1]) out += '<span class="tok-com">' + esc(m[1]) + "</span>";
      else out += '<span class="tok-str">' + esc(m[2]) + "</span>";
      last = m.index + m[0].length;
    }
    out += highlightPlain(src.slice(last));
    return out;
  }

  window.CodeHighlighters = window.CodeHighlighters || {};
  window.CodeHighlighters.javascript = highlight;
})();
