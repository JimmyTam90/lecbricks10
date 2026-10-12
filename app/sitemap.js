import { publicUrl } from "../lib/site-config.js";
export default function sitemap() {
  return ["/", "/privacy", "/terms", "/affiliate-disclosure", "/contact"].map((p) => ({ url: publicUrl(p) }));
}
