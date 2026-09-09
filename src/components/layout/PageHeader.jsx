import { FolkBand, FolkWeave } from '../ui/FolkPattern';

// Shared masthead for the inner pages, so every route opens on the same
// embroidered band instead of a bare heading floating on the page ground.
export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-deep via-cream to-honey/30">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FolkWeave size={132} color="#9C1F1C" opacity={0.07} />
      </div>

      <div className="section-container relative !py-12 sm:!py-16">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="font-serif font-bold text-4xl md:text-5xl text-ink leading-tight max-w-3xl">{title}</h1>
        {lead && <p className="text-ink-muted max-w-2xl mt-4 text-lg leading-relaxed">{lead}</p>}
        {children}
      </div>

      <FolkBand height={14} className="absolute bottom-0 left-0 w-full" />
    </section>
  );
}
