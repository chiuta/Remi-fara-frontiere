// Remi fără frontiere 2.0.1 — etichete în atlas: Remi românesc ca variantă-vedetă, «remi pe tablă» (Rummikub) cu denumire de confirmat.
// Rulare: node tests/etichete-ro.test.mjs   (Playwright; rețea blocată)
import {createRequire} from 'module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const require = createRequire(process.env.PW_ROOT || import.meta.url);
const {chromium} = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url));
let ok = 0, bad = 0;
const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ' + n); } else { bad++; console.log('  FAIL ' + n + (x !== undefined ? ' :: ' + JSON.stringify(x) : '')); } };
const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox']});
const ctx = await b.newContext({viewport: {width: 1000, height: 800}, locale: 'ro-RO'});
let net = 0; await ctx.route(/^https?:/, (r) => { net++; r.abort(); });
const p = await ctx.newPage(); const errs = [];
p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto('file://' + path.join(HERE, '..', 'index.html')); await p.waitForTimeout(1500);
const cards = async () => p.locator('.vcard').evaluateAll(cs => cs.map(c => ({t: c.textContent, tags: [...c.querySelectorAll('.vtag')].map(x => x.textContent)})));
let c = await cards();
t('19 variante în atlas', c.length === 19, c.length);
const star = c.filter(x => x.tags.some(g => g.startsWith('★')));
t('exact o variantă-vedetă (Remi românesc)', star.length === 1 && /Remi/.test(star[0].t), star.map(x => x.tags));
t('prima carte din atlas este vedeta', c[0].tags.some(g => g.startsWith('★')), c[0].tags);
t('regulile regionale sunt marcate «de confirmat»', star[0].tags.some(g => /de confirmat/.test(g)));
const rk = c.filter(x => /Rummikub/i.test(x.t));
t('Rummikub are eticheta «remi pe tablă» (denumire de confirmat)', rk.some(x => x.tags.some(g => /remi pe tablă.*de confirmat/.test(g))), rk.map(x => x.tags));
for (const L of ['en', 'fr', 'it', 'es', 'pt', 'de', 'hu']) {
  await p.evaluate((l) => { const s = document.querySelector('select[id*=ang]'); s.value = l; s.dispatchEvent(new Event('change', {bubbles: true})); }, L);
  await p.waitForTimeout(250);
  c = await cards();
  const all = c.flatMap(x => x.tags);
  t(L + ': etichetele noi sunt traduse (fără «de confirmat» românesc)', !all.some(g => /de confirmat|varianta românească/.test(g)) && all.some(g => g.startsWith('★')), all.filter(g => /★|remi pe/.test(g)));
}
t('0 erori de pagină și 0 cereri de rețea', errs.length === 0 && net === 0, [errs, net]);
await b.close();
console.log(`\n${ok} ok, ${bad} FAIL`); process.exit(bad ? 1 : 0);
