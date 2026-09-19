import { Link, useParams } from 'react-router-dom';
import { content } from '../config/content';
import ProductCard from '../components/sections/ProductCard';
import CtaBand from '../components/sections/CtaBand';

const TINT = {
  sky: { wash: 'bg-sky/40', chip: 'bg-sky/15 text-sky-dark' },
  meadow: { wash: 'bg-meadow/40', chip: 'bg-meadow/15 text-meadow-dark' },
  mint: { wash: 'bg-mint/40', chip: 'bg-mint/15 text-mint-dark' },
  lagoon: { wash: 'bg-lagoon/40', chip: 'bg-lagoon/15 text-lagoon-dark' },
};

const FALLBACK = { wash: 'bg-mist-deep', chip: 'bg-mist-deep text-brand' };

export default function ProductDetail() {
  const { id } = useParams();
  const product = content.products.find((p) => p.id === id);

  if (!product) {
    return (
      <section className="section-container text-center">
        <p className="eyebrow mb-3">Продукти</p>
        <h1 className="font-serif font-semibold text-3xl text-ink mb-6">Не намерихме този продукт</h1>
        <Link to="/products" className="btn-primary no-underline">
          Обратно към продуктите
        </Link>
      </section>
    );
  }

  const category = content.productCategories.find((c) => c.id === product.category);
  const tint = TINT[category?.accent] ?? FALLBACK;
  const similar = content.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <section className="section-container">
        <Link
          to={`/products?category=${product.category}`}
          className="inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-dark text-sm mb-8"
        >
          ← Всички {category?.label.toLowerCase()} продукти
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="rounded overflow-hidden border border-line">
            <div className={`aspect-square ${tint.wash}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>

          <div>
            {category && (
              <span
                className={`inline-flex items-center gap-2 ${tint.chip} pl-2 pr-4 py-1.5 rounded text-sm font-semibold mb-5`}
              >
                <img src={category.animal} alt="" className="w-8 h-6 object-contain" />
                {category.label} мляко
              </span>
            )}

            <h1 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-ink-muted text-lg leading-relaxed mb-6">{product.description}</p>

            <dl className="bg-mist-deep border border-line rounded px-5 py-4 mb-6 inline-block">
              <dt className="eyebrow">Грамаж</dt>
              <dd className="font-serif font-semibold text-ink mt-1">{product.weight}</dd>
            </dl>

            {product.serve && (
              <div className="border-l-2 border-azure pl-5 py-1 mb-6">
                <p className="eyebrow mb-1">На трапезата</p>
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
            <h2 className="font-serif font-semibold text-2xl md:text-3xl text-ink mb-8">
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
