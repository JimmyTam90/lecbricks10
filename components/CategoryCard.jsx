import SafeImage from "./SafeImage.jsx";
import AffiliateCTA from "./AffiliateCTA.jsx";

// Mobile order is fixed by DOM order: image -> title & description -> CTA. No overlays.
export default function CategoryCard({ item }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-edge bg-plate">
      <div className="aspect-[4/3] w-full overflow-hidden bg-ink">
        <SafeImage src={item.image.src} alt={item.image.alt} className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-xl font-bold text-white">{item.name}</h3>
        <p className="text-sm text-slate-300">{item.blurb}</p>
      </div>
      <div className="px-4 pb-4">
        <AffiliateCTA productKey={item.id} label={`Shop ${item.name}`} location={`category_${item.id}`} className="w-full" />
      </div>
    </article>
  );
}
