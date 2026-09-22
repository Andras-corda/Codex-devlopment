/* Coloration syntaxique PHP. Même registre que csharp.js (voir assets/main.js) :
   window.CodeHighlighters.php est appelée pour tout <pre class="code" data-lang="php">. */
(function () {
  "use strict";

  var KW = new Set(("abstract and array as break callable case catch class clone const continue declare " +
    "default do echo else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum extends " +
    "final finally fn for foreach from function global goto if implements include include_once instanceof " +
    "insteadof interface isset list match namespace new or print private protected public readonly require " +
    "require_once return self parent static switch throw trait try unset use var while xor yield true false " +
    "null int float string bool void mixed never object iterable").split(" "));

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Même principe que csharp.js : un seul passage, aucune re-lecture du HTML injecté.
  function highlightPlain(s) {
    var re = /(\$[A-Za-z_][A-Za-z0-9_]*)|([A-Za-z_][A-Za-z0-9_]*)|(0[xX][0-9a-fA-F]+|\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?)|(\s+)|([^A-Za-z0-9_\s$]+)/g;
    var out = "", m;
    while ((m = re.exec(s))) {
      if (m[1]) {
        out += '<span class="tok-var">' + m[1] + "</span>";
      } else if (m[2]) {
        var w = m[2], lw = w.toLowerCase();
        if (KW.has(lw)) out += '<span class="tok-kw">' + w + "</span>";
        else if (/^[A-Z]/.test(w)) out += '<span class="tok-type">' + w + "</span>";
        else if (/^\s*\(/.test(s.slice(re.lastIndex))) out += '<span class="tok-fn">' + w + "</span>";
        else out += w;
      } else if (m[3]) {
        out += '<span class="tok-num">' + m[3] + "</span>";
      } else if (m[4]) {
        out += m[4];
      } else {
        out += esc(m[5]);
      }
    }
    return out;
  }

  function highlight(src) {
    var re = /(\/\/[^\n]*|#(?!\[)[^\n]*|\/\*[\s\S]*?\*\/)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g;
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
  window.CodeHighlighters.php = highlight;
})();
