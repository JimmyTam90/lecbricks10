import { PRODUCT_DEEP_LINKS_MAPPING, DEFAULT_AFFILIATE_URL, resolveAffiliateUrl } from "../lib/affiliate-links.js";
import { CATEGORIES, FEATURED } from "../lib/products.js";
let fail = 0;
const bad = (m) => { console.error("FAIL:", m); fail++; };
const REF = "?ref=kfjtocxz";
if (!DEFAULT_AFFILIATE_URL.endsWith(REF)) bad("default url missing ref");
for (const [k, v] of Object.entries(PRODUCT_DEEP_LINKS_MAPPING)) {
  if (!v.endsWith(REF) || v.split("ref=").length !== 2) bad(`${k} ref not preserved exactly once`);
  if (v.includes("/collections/")) bad(`${k} still uses 404 /collections/ path`);
}
const items = [...CATEGORIES.map((c) => ({ ...c, key: c.id })), ...FEATURED.map((p) => ({ ...p, key: p.affiliateKey }))];
const ids = new Set();
for (const it of items) {
  if (ids.has(it.id)) bad(`duplicate id ${it.id}`); ids.add(it.id);
  const r = resolveAffiliateUrl(it.key);
  if (r.source !== "PRODUCT_MAPPING" || r.url !== PRODUCT_DEEP_LINKS_MAPPING[it.key]) bad(`${it.id} does not resolve to its exact mapping`);
  if (!it.image?.src?.startsWith("https://www.letbricks.com/wp-content/uploads/") || !it.image.alt) bad(`${it.id} image invalid`);
}
console.log(fail ? `${fail} check(s) failed` : `PASS: ${items.length} items, ${Object.keys(PRODUCT_DEEP_LINKS_MAPPING).length} mapped URLs, ref preserved`);
process.exit(fail ? 1 : 0);
