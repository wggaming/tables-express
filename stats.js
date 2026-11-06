/* Statistiques de visite, sans cookie (GoatCounter).
   1. Crée un compte gratuit sur goatcounter.com : tu choisis un code (ex. "jeuxexpress").
   2. Colle-le ci-dessous entre les guillemets. Tant qu'il est vide, rien n'est mesuré. */
var GOATCOUNTER_CODE = 'wggaming';

window.track = function (name) {
  try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: name, title: name, event: true }); } catch (e) {}
};
(function () {
  if (!GOATCOUNTER_CODE) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
