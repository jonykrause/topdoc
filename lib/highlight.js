var hljs = require('highlight.js');
var jsBeautify = require('js-beautify');
var cssBeautify = require('cssbeautify');
var htmlBeautify = require('js-beautify').html;

function beautify(code, lang) {
  if (lang.indexOf('css') != -1) {
    return cssBeautify(code[lang]);
  }
  if (lang.indexOf('html') != -1) {
    return htmlBeautify(code[lang]);
  }
  if (lang.indexOf('js') != -1) {
    return jsBeautify(code[lang]);
  }
};

function highlight(code) {
  var snippets = [];
  Object.keys(code).forEach(function(lang) {
    return snippets.push(hljs.highlightAuto(beautify(code, lang)).value);
  });
  return snippets;
};

module.exports = highlight;
