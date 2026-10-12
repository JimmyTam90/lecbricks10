import { SITE, publicPath } from "../lib/site-config.js";
import SafeImage from "./SafeImage.jsx";

export default function Header() {
  return (
    <header className="border-b border-edge bg-ink">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a href={publicPath("/")} className="flex items-center gap-3" aria-label={`${SITE.brandName} home`}>
          <SafeImage src={SITE.headerLogoPath} alt={`${SITE.brandName} logo`} fit="contain" className="h-10 w-10 rounded" />
          <span className="font-display text-xl font-bold tracking-tight text-white">{SITE.brandName}</span>
        </a>
        <p className="ml-auto hidden text-sm text-slate-400 sm:block">Independent guide to Letbricks MOC sets</p>
      </div>
    </header>
  );
}
