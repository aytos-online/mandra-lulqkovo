import { useState } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../../config/content';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';

export default function ProductCatalog({ limit, showViewAllLink = false }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? content.products.filter((p) => p.category === activeCategory)
    : content.products;
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {visible.map((product) => (
          <ProductCard key={`${product.category}-${product.name}`} product={product} />
        ))}
      </div>

      {showViewAllLink && (
        <div className="mt-10">
          <Link to="/products" className="font-semibold text-maroon hover:text-maroon-dark">
            Разгледайте всички продукти →
          </Link>
        </div>
      )}
    </div>
  );
}
