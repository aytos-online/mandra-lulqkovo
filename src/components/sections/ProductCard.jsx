import { Link } from 'react-router-dom';
import { content } from '../../config/content';
import { FolkBand, FolkWeave } from '../ui/FolkPattern';

// The product illustrations are pale flat art on a cream ground. Laid over the
// milk's own colour with `multiply`, the flat ground disappears into the tint
// and the whole catalogue reads as one set instead of fourteen loose stickers.
const TINT = {
  sky: { wash: 'bg-sky/30', chip: 'bg-sky' },
  meadow: { wash: 'bg-meadow/30', chip: 'bg-meadow' },
  sun: { wash: 'bg-sun/30', chip: 'bg-sun' },
  coral: { wash: 'bg-coral/30', chip: 'bg-coral' },
};

const FALLBACK = { wash: 'bg-cream-deep', chip: 'bg-honey' };

export default function ProductCard({ product }) {
  const category = content.productCategories.find((c) => c.id === product.category);
  const tint = TINT[category?.accent] ?? FALLBACK;

  return (
    <Link to={`/products/${product.id}`} className="block h-full no-underline group">
      <article className="h-full bg-paper border-2 border-ink/10 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-maroon/30 group-hover:shadow-[0_18px_36px_-16px_rgba(43,26,18,0.45)]">
        <div className={`relative aspect-square overflow-hidden ${tint.wash}`}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <FolkWeave size={64} color="#9C1F1C" opacity={0.08} />
          </div>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="relative w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <span
              className={`absolute top-3 left-3 ${tint.chip} text-espresso text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm`}
            >
              {category.label}
            </span>
          )}
        </div>

        <FolkBand height={10} />

        <div className="p-5 flex flex-col gap-2 flex-1">
          <h3 className="font-serif font-bold text-ink text-lg leading-snug group-hover:text-maroon transition-colors">
            {product.name}
          </h3>
          <p className="text-ink-muted text-sm flex-1">{product.description}</p>
          <p className="text-ink-muted/80 text-xs border-t border-ink/10 pt-3 mt-1">{product.weight}</p>
          <span className="text-maroon font-bold text-sm mt-1">Виж продукта →</span>
        </div>
      </article>
    </Link>
  );
}
