import { SITE, publicPath } from "../lib/site-config.js";

export default function Footer() {
  const links = [["Privacy", "/privacy"], ["Terms", "/terms"], ["Affiliate disclosure", "/affiliate-disclosure"], ["Contact", "/contact"]];
  return (
    <footer className="border-t border-edge bg-ink px-4 pb-28 pt-8 text-sm text-slate-400 md:pb-8">
      <div className="mx-auto max-w-6xl space-y-3">
        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map(([t, p]) => (
            <a key={p} href={publicPath(p)} className="py-1 text-slate-200 underline-offset-4 hover:underline">{t}</a>
          ))}
        </nav>
        <p>As an affiliate publisher, we may earn a commission from qualifying purchases made through links on this page, at no additional cost to you.</p>
        <p>{SITE.brandName} is an independent affiliate publisher and is not the {SITE.merchantName} store. Purchases, prices, shipping and returns are handled by {SITE.merchantName}.</p>
        <p>LEGO is a trademark of the LEGO Group, which does not sponsor, authorize or endorse this site. Letbricks states that it does not use LEGO parts.</p>
        <p>© {new Date().getFullYear()} {SITE.brandName}</p>
      </div>
    </footer>
  );
}
