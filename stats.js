/* Statistiques de visite, sans cookie (GoatCounter).
   1. Crée un compte gratuit sur goatcounter.com : tu choisis un code (ex. "jeuxexpress").
   2. Colle-le ci-dessous entre les guillemets. Tant qu'il est vide, rien n'est mesuré. */
var GOATCOUNTER_CODE = 'wggaming';

var __q = [];
function __send(name) { try { window.goatcounter.count({ path: name, title: name, event: true }); } catch (e) {} }
window.track = function (name) {
  if (window.goatcounter && window.goatcounter.count) __send(name); else __q.push(name);
};
/* Chaque site a son propre domaine : on préfixe les chemins pour garder les statistiques séparées dans le même compte. */
window.goatcounter = window.goatcounter || {};
window.goatcounter.path = function (p) { return '/tables-express' + (p === '/index.html' ? '/' : p); };
(function () {
  if (!GOATCOUNTER_CODE) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
  s.onload = function () { var n = 0, t = setInterval(function () { if (window.goatcounter && window.goatcounter.count) { clearInterval(t); __q.splice(0).forEach(__send); } else if (++n > 20) clearInterval(t); }, 250); };
  document.head.appendChild(s);
})();
