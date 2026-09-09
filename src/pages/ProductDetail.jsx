import { Link, useParams } from 'react-router-dom';
import { content } from '../config/content';
import ProductCard from '../components/sections/ProductCard';
import CtaBand from '../components/sections/CtaBand';
import AnimalMark from '../components/ui/AnimalMark';
import { FolkBand, FolkWeave } from '../components/ui/FolkPattern';

const TINT = {
  sky: { wash: 'bg-sky/30', chip: 'bg-sky' },
  meadow: { wash: 'bg-meadow/30', chip: 'bg-meadow' },
  sun: { wash: 'bg-sun/30', chip: 'bg-sun' },
  coral: { wash: 'bg-coral/30', chip: 'bg-coral' },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = content.products.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="section-container text-center">
        <p className="eyebrow mb-3">Продукти</p>
        <h1 className="font-serif font-bold text-3xl text-ink mb-6">Не намерихме този продукт</h1>
        <Link to="/products" className="btn-primary no-underline">
          Обратно към продуктите
        </Link>
      </section>
    );
  }

  const category = content.productCategories.find((c) => c.id === product.category);
  const tint = TINT[category?.accent] ?? { wash: 'bg-cream-deep', chip: 'bg-honey' };
  const similar = content.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <section className="section-container">
        <Link
          to={`/products?category=${product.category}`}
          className="inline-flex items-center gap-1 font-bold text-maroon hover:text-maroon-dark text-sm mb-8"
        >
          ← Всички {category?.label.toLowerCase()} продукти
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="rounded-3xl overflow-hidden border-2 border-ink/10 shadow-[0_18px_40px_-20px_rgba(43,26,18,0.5)]">
            <div className={`relative aspect-square ${tint.wash}`}>
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <FolkWeave size={84} color="#9C1F1C" opacity={0.08} />
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="relative w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            <FolkBand height={14} />
          </div>

          <div>
            {category && (
              <span
                className={`inline-flex items-center gap-2 ${tint.chip} text-espresso pl-2 pr-4 py-1.5 rounded-full text-sm font-bold mb-5`}
              >
                <AnimalMark animal={category.id} className="w-6 h-6 text-espresso" />
                {category.label} мляко
              </span>
            )}

            <h1 className="font-serif font-bold text-3xl md:text-4xl text-ink mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-ink-muted text-lg leading-relaxed mb-6">{product.description}</p>

            <dl className="bg-cream-deep/70 rounded-2xl px-5 py-4 mb-6 inline-block">
              <dt className="text-[11px] uppercase tracking-[0.16em] font-bold text-maroon">Грамаж</dt>
              <dd className="font-serif font-bold text-ink mt-1">{product.weight}</dd>
            </dl>

            {product.serve && (
              <div className="border-l-4 border-honey pl-5 py-1 mb-6">
                <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-maroon mb-1">
                  На трапезата
                </p>
                <p className="text-ink-muted leading-relaxed">{product.serve}</p>
              </div>
            )}

            {category && (
              <p className="text-ink-muted italic leading-relaxed mb-8">{category.blurb}</p>
            )}

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary no-underline">
                Питайте за наличност
              </Link>
              <Link to="/stores" className="btn-secondary no-underline">
                Къде да го купите
              </Link>
            </div>
          </div>
        </div>

        {similar.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-ink mb-8">
              Още {category?.label.toLowerCase()} продукти
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similar.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>

      <CtaBand />
    </>
  );
}
