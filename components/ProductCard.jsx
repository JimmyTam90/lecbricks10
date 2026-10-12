import SafeImage from "./SafeImage.jsx";
import AffiliateCTA from "./AffiliateCTA.jsx";

export default function ProductCard({ item }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-edge bg-plate">
      <div className="aspect-square w-full overflow-hidden bg-white">
        <SafeImage src={item.image.src} alt={item.image.alt} fit="contain" className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-xl font-bold text-white">{item.name}</h3>
        <dl className="text-sm text-slate-300">
          <div className="flex gap-2"><dt className="text-slate-400">Designer:</dt><dd>{item.designer}</dd></div>
          <div className="flex gap-2"><dt className="text-slate-400">Pieces:</dt><dd>{item.pieces ?? "See merchant page"}</dd></div>
        </dl>
      </div>
      <div className="px-4 pb-4">
        <AffiliateCTA productKey={item.affiliateKey} label="View set on Letbricks" location={`product_${item.id}`} className="w-full" />
      </div>
    </article>
  );
}
