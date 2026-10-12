import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import StickyCTA from "../components/StickyCTA.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import ProductCard from "../components/ProductCard.jsx";
import AffiliateCTA from "../components/AffiliateCTA.jsx";
import SafeImage from "../components/SafeImage.jsx";
import { CATEGORIES, FEATURED, HERO_IMAGE } from "../lib/products.js";

const NOTES = [
  "Letbricks sells MOC sets: original designs by independent builders, made with bricks from Chinese manufacturers rather than LEGO parts, according to the merchant's FAQ.",
  "Per the merchant, building instructions arrive as a QR-code sticker in the package.",
  "The merchant lists a 30-day money-back guarantee and says processing times can run longer in busy seasons. Read its shipping and return pages before ordering.",
];

export default function Page() {
  const cats = Array.isArray(CATEGORIES) ? CATEGORIES : [];
  const feats = Array.isArray(FEATURED) ? FEATURED : [];
  return (
    <>
      <Header />
      <main>
        <section className="stud-bg border-b border-edge">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-16">
            {/* DOM order on mobile: image -> title & description -> CTA */}
            <div className="order-1 mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-lg border border-edge bg-ink lg:order-2 lg:max-w-lg">
              <SafeImage src={HERO_IMAGE.src} alt={HERO_IMAGE.alt} priority className="h-full w-full" />
            </div>
            <div className="order-2 space-y-4 lg:order-1">
              <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">Build big: MOC sets with thousands of pieces</h1>
              <p className="max-w-prose text-lg text-slate-300">
                Castles, modular buildings, trains and military models designed by independent builders and sold by Letbricks. Browse the themes below and check specs, piece counts and current prices on the merchant site.
              </p>
              <AffiliateCTA productKey="all-moc-sets" label="Browse all themes on Letbricks" location="hero" className="w-full sm:w-auto" />
              <p className="text-sm text-slate-400">Affiliate link: we may earn a commission at no extra cost to you.</p>
            </div>
          </div>
        </section>

        <section id="range" className="mx-auto max-w-6xl px-4 py-12" aria-labelledby="range-h">
          <h2 id="range-h" className="mb-6 font-display text-3xl font-bold text-white">Browse the full range</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cats.map((c) => <CategoryCard key={c.id} item={c} />)}
          </div>
        </section>

        <section id="featured" className="mx-auto max-w-6xl px-4 pb-12" aria-labelledby="feat-h">
          <h2 id="feat-h" className="mb-2 font-display text-3xl font-bold text-white">Featured builds</h2>
          <p className="mb-6 text-slate-300">Prices and availability change. Check the current price on the merchant page.</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {feats.map((p) => <ProductCard key={p.id} item={p} />)}
          </div>
        </section>

        <section id="know" className="border-t border-edge bg-plate" aria-labelledby="know-h">
          <div className="mx-auto max-w-3xl space-y-3 px-4 py-12">
            <h2 id="know-h" className="font-display text-3xl font-bold text-white">Before you buy</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-200">
              {NOTES.map((n) => <li key={n}>{n}</li>)}
            </ul>
            <p className="text-sm text-slate-400">These points come from the merchant&apos;s website as read on 12 Oct 2026 and may change.</p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
