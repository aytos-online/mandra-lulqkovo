import { content } from '../../config/content';

export default function CategoryFilter({ active, onChange }) {
  const counts = content.productCategories.map((cat) => ({
    ...cat,
    count: content.products.filter((p) => p.category === cat.id).length,
  }));

  return (
    <div className="flex flex-wrap gap-4">
      {counts.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(isActive ? null : cat.id)}
            className={`flex items-center gap-3 pl-2 pr-5 py-2 rounded-full border transition-colors ${
              isActive ? 'bg-maroon border-maroon text-cream' : 'bg-paper border-ink/10 text-ink hover:border-maroon/40'
            }`}
          >
            <span
              className={`flex items-center justify-center w-9 h-9 rounded-full font-serif font-bold text-sm ${
                isActive ? 'bg-cream text-maroon' : 'bg-cream-deep text-ink'
              }`}
            >
              {cat.icon}
            </span>
            <span className="text-left">
              <span className="block font-semibold text-sm">{cat.label}</span>
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
