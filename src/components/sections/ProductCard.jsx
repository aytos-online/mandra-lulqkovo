import Card from '../ui/Card';
import PhotoCredit from '../ui/PhotoCredit';

export default function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3]">
        <img src={product.image.url} alt={product.name} className="w-full h-full object-cover" />
        <PhotoCredit credit={product.image.credit} />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-serif font-bold text-ink text-lg leading-snug">{product.name}</h3>
        <p className="text-ink-muted text-sm flex-1">{product.description}</p>
        <p className="text-ink-muted text-xs border-t border-ink/10 pt-3 mt-1">{product.weight}</p>
      </div>
    </Card>
  );
}
