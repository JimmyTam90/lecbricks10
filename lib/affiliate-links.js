// SINGLE SOURCE OF TRUTH for affiliate destinations.
// Every URL below carries ?ref=kfjtocxz exactly as supplied. Nothing here appends,
// strips or reorders parameters at runtime.
//
// REMAPPED: the originally supplied /collections/... paths returned 404 on letbricks.com
// (a WooCommerce site). Per the owner's authorization they were remapped to real
// /product-category/... paths taken from the merchant's own navigation (2026-10-12).
// Status of every URL: PROVIDED_NOT_RUNTIME_VERIFIED (syntax only; destinations not click-tested).

export const DEFAULT_AFFILIATE_URL = "https://www.letbricks.com/?ref=kfjtocxz";

export const PRODUCT_DEEP_LINKS_MAPPING = {
  // Category cards
  "medieval-castle": "https://www.letbricks.com/product-category/medieval-castle/?ref=kfjtocxz",
  "sci-fi-space": "https://www.letbricks.com/product-category/shop-by-theme/movie-scene/?ref=kfjtocxz", // nearest real category: "Movie" (no dedicated sci-fi category found)
  "technic-vehicles": "https://www.letbricks.com/product-category/shop-by-theme/tech-moc/?ref=kfjtocxz",
  "architecture-modular": "https://www.letbricks.com/product-category/shop-by-theme/modern-build/?ref=kfjtocxz", // merchant label: "Buildings"
  "military-weapons": "https://www.letbricks.com/military-bricks-moc-sets/?ref=kfjtocxz", // merchant label: "Military"
  "trains-railway": "https://www.letbricks.com/product-category/shop-by-theme/train/?ref=kfjtocxz",
  "all-moc-sets": "https://www.letbricks.com/product-category/shop-by-theme/?ref=kfjtocxz",
  "new-arrivals": "https://www.letbricks.com/product-category/flash-deals/new-moc/?ref=kfjtocxz",
  "clearance-sale": "https://www.letbricks.com/product-category/clearance-sales/?ref=kfjtocxz",
  // Featured product pages (real merchant product URLs, same ref parameter)
  "featured-sr71": "https://www.letbricks.com/product/sr-71-blackbird-high-altitude-reconnaissance-aircraft-building-blocks-set-2981pcs-by-mindbricks/?ref=kfjtocxz",
  "featured-uss-arizona": "https://www.letbricks.com/product/moc-275741-uss-arizona-battleship-building-blocks-set-2458pcs-by-bespokebrickdesigns/?ref=kfjtocxz",
  "featured-medieval-mansion": "https://www.letbricks.com/product/moc-273998-274686-medieval-mansion-building-blocks-set-by-brickmanstudio/?ref=kfjtocxz",
};

function isValidHttpUrl(value) {
  if (typeof value !== "string" || !value) return false;
  try {
    const u = new URL(value);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

/**
 * resolveAffiliateUrl(productKey) -> { url, source, status }
 * Returns the EXACT mapped string; falls back to DEFAULT_AFFILIATE_URL; never builds URLs.
 * url is null (CTA must be disabled) only if neither is valid.
 */
export function resolveAffiliateUrl(productKey) {
  const mapped = PRODUCT_DEEP_LINKS_MAPPING[productKey];
  if (isValidHttpUrl(mapped)) {
    return { url: mapped, source: "PRODUCT_MAPPING", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
  }
  if (isValidHttpUrl(DEFAULT_AFFILIATE_URL)) {
    return { url: DEFAULT_AFFILIATE_URL, source: "DEFAULT_FALLBACK", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
  }
  return { url: null, source: "NONE", status: "BLOCKED_MISSING_AFFILIATE_URL" };
}
