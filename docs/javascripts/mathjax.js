window.MathJax = {
  loader: {
    // \boldsymbol lives in the boldsymbol package and AMS symbols in ams;
    // load both explicitly so bold vectors render without relying on autoload.
    load: ["[tex]/ams", "[tex]/boldsymbol"]
  },
  tex: {
    packages: { "[+]": ["ams", "boldsymbol"] },
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});
