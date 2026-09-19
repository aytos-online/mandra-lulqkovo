import { Link } from 'react-router-dom';
import { content } from '../../config/content';
import Reveal from '../ui/Reveal';

// Written out in full so Tailwind keeps the classes — one light shade per milk,
// used consistently wherever that milk appears on the site.
const ACCENT = {
  sky: { wash: 'bg-sky/15', bar: 'bg-sky', ring: '!border-sky-dark' },
  meadow: { wash: 'bg-meadow/15', bar: 'bg-meadow', ring: '!border-meadow-dark' },
  mint: { wash: 'bg-mint/15', bar: 'bg-mint', ring: '!border-mint-dark' },
  lagoon: { wash: 'bg-lagoon/15', bar: 'bg-lagoon', ring: '!border-lagoon-dark' },
};

const FALLBACK = { wash: 'bg-mist-deep', bar: 'bg-brand', ring: '!border-brand' };

export default function AnimalCategories({ active, onChange, linkMode = false, variant = 'tile' }) {
  const categories = content.productCategories.map((cat) => ({
    ...cat,
    count: content.products.filter((p) => p.category === cat.id).length,
    accentClasses: ACCENT[cat.accent] ?? FALLBACK,
  }));

  if (variant === 'icon') {
    return (
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onChange(null)}
          className={`px-5 h-11 rounded border font-semibold text-sm transition-colors ${
            active
              ? 'bg-paper border-line text-ink hover:border-ink-soft'
              : 'bg-ink border-ink text-white'
          }`}
        >
          Всички
        </button>

        {categories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onChange(isActive ? null : cat.id)}
              className={`flex items-center gap-3 pl-2 pr-5 py-2 rounded border transition-colors ${
                isActive ? 'bg-ink border-ink text-white' : 'bg-paper border-line text-ink hover:border-ink-soft'
              }`}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded overflow-hidden bg-paper">
                <img src={cat.animal} alt="" className="w-8 h-8 object-contain" />
              </span>
              <span className="text-left">
                <span className="block font-semibold text-sm">{cat.label}</span>
                <span className={`block text-xs ${isActive ? 'text-white/70' : 'text-ink-muted'}`}>
                  {cat.count} продукта
                </span>
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {categories.map((cat, i) => {
        const isActive = active === cat.id;
        const { wash, bar, ring } = cat.accentClasses;

        const card = (
          <div
            className={`card card-lift group h-full overflow-hidden ${
              isActive ? `${ring} -translate-y-1` : ''
            }`}
          >
            <span className={`block h-1 ${bar}`} aria-hidden="true" />
            <div className={`${wash} aspect-[5/4] flex items-center justify-center p-4`}>
              <img
                src={cat.animal}
                alt={cat.animalAlt}
                loading="lazy"
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4 text-center border-t border-line">
              <p className="font-serif font-semibold text-ink text-lg leading-tight">{cat.label}</p>
              <p className="hidden sm:block text-ink-muted text-xs mt-1.5 leading-snug">{cat.blurb}</p>
              <p className="label text-brand mt-2">
                {cat.count} продукта
              </p>
            </div>
          </div>
        );

        const wrapped = linkMode ? (
          <Link to={`/products?category=${cat.id}`} className="block h-full no-underline">
            {card}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => onChange(isActive ? null : cat.id)}
            className="text-left w-full h-full appearance-none bg-transparent p-0 border-0 cursor-pointer"
          >
            {card}
          </button>
        );

        return (
          <Reveal key={cat.id} delay={i * 90} className="h-full">
            {wrapped}
          </Reveal>
        );
      })}
    </div>
  );
}
