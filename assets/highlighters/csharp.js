(function () {
  "use strict";

  var KW = new Set(("abstract as async await base bool break byte case catch char checked class const " +
    "continue decimal default delegate do double dynamic else enum event explicit extern false finally " +
    "fixed float for foreach goto if implicit in int interface internal is lock long nameof namespace new " +
    "null object operator out override params private protected public readonly record ref return sbyte " +
    "sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong " +
    "unchecked unsafe ushort using var virtual void volatile while with yield get set init when where " +
    "and or not global").split(" "));

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function highlightPlain(s) {
    var re = /([A-Za-z_][A-Za-z0-9_]*)|(0[xX][0-9a-fA-F]+|\d[\d_]*\.?\d*(?:[eE][+-]?\d+)?[fFdDmMuUlL]*)|(\s+)|([^A-Za-z0-9_\s]+)/g;
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
    var re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(\$?@?"(?:[^"\\]|\\.|"")*"|'(?:[^'\\]|\\.)')/g;
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
  window.CodeHighlighters.csharp = highlight;
})();
