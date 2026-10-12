import AffiliateCTA from "./AffiliateCTA.jsx";

// Supplements (does not replace) the in-flow CTAs. Same resolver, new tab.
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-edge bg-ink/95 px-4 pt-3 md:hidden" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}>
      <AffiliateCTA productKey="all-moc-sets" label="Browse Letbricks sets" location="sticky_mobile" className="w-full" />
    </div>
  );
}
