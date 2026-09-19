import { siteConfig } from '../../config/site.config';

export default function StoreCard({ store }) {
  return (
    <article
      className={`card card-lift h-full overflow-hidden flex flex-col ${
        store.primary ? '!border-brand' : ''
      }`}
    >
      <span className={`block h-1 ${store.primary ? 'bg-brand' : 'bg-azure'}`} aria-hidden="true" />

      <div className="p-6 flex-1">
        {store.primary && (
          <span className="label inline-flex items-center bg-brand text-white px-3 py-1 rounded mb-3">
            Нашият магазин
          </span>
        )}
        <h3 className="font-serif font-semibold text-ink text-lg mb-2">{store.name}</h3>
        <p className="text-ink-muted text-sm">{store.city}</p>
        {/*{store.schedule && <p className="text-ink-soft text-sm mt-1">{store.schedule}</p>}*/}

        {store.primary && (
          <a
            href={siteConfig.business.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-semibold text-brand hover:text-brand-dark text-sm mt-4"
          >
            Виж на картата →
          </a>
        )}
      </div>
    </article>
  );
}
