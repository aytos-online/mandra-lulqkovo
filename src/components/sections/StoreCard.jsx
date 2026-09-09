import { siteConfig } from '../../config/site.config';
import { FolkBand, FolkStar } from '../ui/FolkPattern';

export default function StoreCard({ store }) {
  return (
    <article
      className={`h-full bg-paper rounded-3xl overflow-hidden flex flex-col border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(43,26,18,0.45)] ${
        store.primary ? 'border-maroon/40' : 'border-ink/10'
      }`}
    >
      <FolkBand
        height={12}
        threads={store.primary ? undefined : { a: '#EFA92B', b: '#C9860F', c: '#C22E2A' }}
      />

      <div className="p-6 flex-1">
        {store.primary && (
          <span className="inline-flex items-center gap-2 bg-maroon text-cream text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <FolkStar className="w-3 h-3" threads={{ a: '#FDF3E0', b: '#FDF3E0', c: '#EFA92B' }} />
            Нашият магазин
          </span>
        )}
        <h3 className="font-serif font-bold text-ink text-lg mb-2">{store.name}</h3>
        <p className="text-ink-muted text-sm">{store.city}</p>
        {store.schedule && <p className="text-ink-muted/80 text-sm mt-1">{store.schedule}</p>}

        {store.primary && (
          <a
            href={siteConfig.business.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-bold text-maroon hover:text-maroon-dark text-sm mt-4"
          >
            Виж на картата →
          </a>
        )}
      </div>
    </article>
  );
}
