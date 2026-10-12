"use client";
import { resolveAffiliateUrl } from "../lib/affiliate-links.js";

// Real <a>, always a NEW TAB. No router, no window overrides, URL is the exact mapped string.
export default function AffiliateCTA({ productKey, label = "Shop on Letbricks", location = "cta", className = "" }) {
  const { url } = resolveAffiliateUrl(productKey);
  if (!url) {
    return <span className="inline-block rounded bg-edge px-4 py-3 text-slate-300">Link unavailable</span>;
  }
  const track = () => {
    try {
      if (typeof window === "undefined") return;
      const payload = { item_key: productKey, location };
      if (typeof window.gtag === "function") window.gtag("event", "affiliate_click", payload);
      if (typeof window.fbq === "function") window.fbq("trackCustom", "AffiliateClick", payload);
    } catch {
      /* tracking must never block navigation */
    }
  };
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-md bg-brick px-5 py-3 text-center font-bold text-white transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
    >
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
