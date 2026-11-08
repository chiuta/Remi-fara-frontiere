// Remi: mesaje diferențiate la „nu e meld valid” (meldWhy). Funcțiile pure se extrag din index.html și rulează în vm; cheile i18n se verifică în sursă.
// Rulare: node tests/meld-motive.test.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const html = fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'index.html'), 'utf8');
let ok = 0, bad = 0;
const check = (n, c, x) => { if (c) { ok++; console.log('  ok  ' + n); } else { bad++; console.log('  FAIL ' + n + (x !== undefined ? ' :: ' + JSON.stringify(x) : '')); } };
const a = html.indexOf('function isValidSet('), b = html.indexOf('function runPoints(');
const ctx = vm.createContext({GS: {cfg: {}}, console});
vm.runInContext(html.slice(a, b) + '\nthis.W = meldWhy;', ctx);
const W = ctx.W, c = (rank, suit) => ({rank, suit}), j = () => ({joker: true});
const cases = {
  few: [c(3, 'h'), c(3, 's')], joker: [j(), j(), j()], dupsuit: [c(5, 'h'), c(5, 's'), c(5, 'h')],
  many: [c(5, 'h'), c(5, 's'), c(5, 'd'), c(5, 'c'), c(5, 'h')], duprank: [c(4, 'h'), c(5, 'h'), c(5, 'h')],
  gap: [c(2, 'h'), c(3, 'h'), c(8, 'h')], mixed: [c(2, 'h'), c(7, 's'), c(9, 'd')]
};
for (const k in cases) check('motiv ' + k, W(cases[k]) === k, W(cases[k]));
for (const k in cases) {
  const m = html.match(new RegExp('"m\\.inv\\.' + k + '":\\[([^\\]]*)\\]'));
  check('m.inv.' + k + ' în 8 limbi', m && (m[1].match(/"⚠/g) || []).length === 8, m && m[1].length);
}
console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);
