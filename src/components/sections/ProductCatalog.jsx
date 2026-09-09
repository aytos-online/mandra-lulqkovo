import { useState } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../../config/content';
import AnimalCategories from './AnimalCategories';
import ProductCard from './ProductCard';
import { FolkStar } from '../ui/FolkPattern';

export default function ProductCatalog({ limit, showViewAllLink = false, activeCategory: controlledCategory, onCategoryChange }) {
  const [internalCategory, setInternalCategory] = useState(null);
  const isControlled = controlledCategory !== undefined;
  const activeCategory = isControlled ? controlledCategory : internalCategory;
  const setActiveCategory = isControlled ? onCategoryChange : setInternalCategory;

  const filtered = activeCategory
    ? content.products.filter((p) => p.category === activeCategory)
    : content.products;
  const visible = limit ? filtered.slice(0, limit) : filtered;
  const activeLabel = content.productCategories.find((c) => c.id === activeCategory)?.label;

  return (
    <div>
      <AnimalCategories active={activeCategory} onChange={setActiveCategory} variant="icon" />

      <p className="text-sm text-ink-muted mt-6">
        {activeLabel ? `${visible.length} продукта от ${activeLabel.toLowerCase()} мляко` : `Всички ${visible.length} продукта`}
      </p>

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-ink-muted mt-6">Няма продукти в тази категория.</p>
      )}

      {showViewAllLink && (
        <div className="mt-10 flex items-center gap-3">
          <FolkStar className="w-4 h-4" />
          <Link to="/products" className="font-bold text-maroon hover:text-maroon-dark">
            Разгледайте всички продукти →
          </Link>
        </div>
      )}
    </div>
  );
}
