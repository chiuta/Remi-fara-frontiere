// Regresie 1.2.8: CSP fără `blob:` în script-src / worker-src; hash-urile scripturilor inline corespund; fără violări CSP la pornire.
import fs from "fs";
import crypto from "crypto";
import {launch, check, summary, INDEX} from "./_lib.mjs";
const html = fs.readFileSync(INDEX, "utf8");
const csp = html.match(/Content-Security-Policy" content="([^"]*)"/)[1];
const dir = n => (csp.split(";").map(s => s.trim()).find(s => s.startsWith(n + " ")) || "");
check("script-src fără blob:", !/blob:/.test(dir("script-src")), dir("script-src").slice(0, 60));
check("worker-src fără blob:", !/blob:/.test(dir("worker-src")), dir("worker-src"));
const hashes = [...csp.matchAll(/'sha256-([^']+)'/g)].map(m => m[1]);
const inline = [...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)].filter(m => !/type\s*=\s*["']?(application\/json|text\/plain)/.test(m[1]) && !/\bsrc=/.test(m[1])).map(m => crypto.createHash("sha256").update(m[2], "utf8").digest("base64"));
check("hash-urile CSP acoperă exact scripturile inline", inline.length === hashes.length && inline.every(h => hashes.includes(h)));
const {browser, page, st} = await launch();
await page.waitForTimeout(1500);
check("0 erori", st.errs.length === 0, st.errs);
check("0 violări CSP", (await page.evaluate(() => window.__csp)).length === 0);
await browser.close();
summary();
