import { Link } from 'react-router-dom';
import { content } from '../../config/content';
import Reveal from '../ui/Reveal';
import AnimalMark from '../ui/AnimalMark';
import { FolkBand, FolkWeave } from '../ui/FolkPattern';

// Written out in full so Tailwind keeps the classes — one bright folk colour
// per milk, used consistently wherever that milk appears on the site.
const ACCENT = {
  sky: { tile: 'bg-sky', ring: 'ring-sky-dark', dot: 'bg-sky-dark' },
  meadow: { tile: 'bg-meadow', ring: 'ring-meadow-dark', dot: 'bg-meadow-dark' },
  sun: { tile: 'bg-sun', ring: 'ring-sun-dark', dot: 'bg-sun-dark' },
  coral: { tile: 'bg-coral', ring: 'ring-coral-dark', dot: 'bg-coral-dark' },
};

const FALLBACK = { tile: 'bg-maroon', ring: 'ring-maroon-dark', dot: 'bg-maroon-dark' };

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
          className={`px-5 py-3 rounded-full border-2 font-bold text-sm transition-colors ${
            active
              ? 'bg-paper border-ink/15 text-ink hover:border-maroon hover:text-maroon'
              : 'bg-maroon border-maroon text-cream'
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
              className={`flex items-center gap-3 pl-2 pr-5 py-2 rounded-full border-2 transition-colors ${
                isActive
                  ? 'bg-maroon border-maroon text-cream'
                  : 'bg-paper border-ink/15 text-ink hover:border-maroon/50'
              }`}
            >
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full ${cat.accentClasses.tile}`}
              >
                <AnimalMark animal={cat.id} className="w-7 h-7 text-espresso" />
              </span>
              <span className="text-left">
                <span className="block font-bold text-sm">{cat.label}</span>
                <span className={`block text-xs ${isActive ? 'text-cream/80' : 'text-ink-muted'}`}>
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
        const tilt = i % 2 === 0 ? 'group-hover:-rotate-1.5' : 'group-hover:rotate-1.5';
        const { tile, ring } = cat.accentClasses;

        const card = (
          <div
            className={`group h-full bg-paper border-2 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_-16px_rgba(43,26,18,0.45)] ${
              isActive ? `ring-4 ${ring} border-transparent -translate-y-1.5` : 'border-ink/10'
            }`}
          >
            <div className={`relative ${tile} aspect-[5/4] flex items-center justify-center`}>
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <FolkWeave size={70} color="#FFFFFF" opacity={0.16} />
              </div>
              <AnimalMark
                animal={cat.id}
                className={`relative w-3/5 h-3/5 text-espresso transition-transform duration-300 ${tilt}`}
              />
            </div>

            <FolkBand height={12} />

            <div className="p-4 text-center">
              <p className="font-serif font-bold text-ink text-lg leading-tight">{cat.label}</p>
              <p className="hidden sm:block text-ink-muted text-xs mt-1.5 leading-snug">{cat.blurb}</p>
              <p className="text-maroon text-[11px] font-bold mt-2 uppercase tracking-wider">
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
