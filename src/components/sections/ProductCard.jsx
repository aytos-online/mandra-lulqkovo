import { Link } from 'react-router-dom';
import { content } from '../../config/content';

// The product illustrations are pale flat art on a light ground. Laid over the
// milk's own tint with `multiply`, the flat ground disappears into the wash and
// the whole catalogue reads as one set instead of fourteen loose stickers.
const TINT = {
  sky: { wash: 'bg-sky/40', chip: 'bg-sky' },
  meadow: { wash: 'bg-meadow/40', chip: 'bg-meadow' },
  mint: { wash: 'bg-mint/40', chip: 'bg-mint' },
  lagoon: { wash: 'bg-lagoon/40', chip: 'bg-lagoon' },
};

const FALLBACK = { wash: 'bg-mist-deep', chip: 'bg-brand' };

export default function ProductCard({ product }) {
  const category = content.productCategories.find((c) => c.id === product.category);
  const tint = TINT[category?.accent] ?? FALLBACK;

  return (
    <Link to={`/products/${product.id}`} className="block h-full no-underline group">
      <article className="card card-lift h-full overflow-hidden flex flex-col">
        <div className={`relative aspect-square overflow-hidden ${tint.wash}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <span
              className={`label absolute top-3 left-3 ${tint.chip} text-white px-3 py-1 rounded`}
            >
              {category.label}
            </span>
          )}
        </div>

        <div className="p-5 flex flex-col gap-2 flex-1 border-t border-line">
          <h3 className="font-serif font-semibold text-ink text-lg leading-snug group-hover:text-brand transition-colors">
            {product.name}
          </h3>
          <p className="text-ink-muted text-sm flex-1">{product.description}</p>
          <p className="text-ink-soft text-xs border-t border-line pt-3 mt-1">{product.weight}</p>
          <span className="text-brand font-semibold text-sm mt-1">Виж продукта →</span>
        </div>
      </article>
    </Link>
  );
}
