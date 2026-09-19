// Shared masthead for the inner pages: a quiet tinted band with a hairline
// under it, so every route opens the same way without any ornament.
export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <section className="bg-mist-deep border-b border-line">
      <div className="section-container !py-12 sm:!py-16">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="font-serif font-semibold text-4xl md:text-5xl text-ink leading-[1.14] max-w-3xl">
          {title}
        </h1>
        <span className="rule mt-6" aria-hidden="true" />
        {lead && <p className="text-ink-muted max-w-2xl mt-6 text-lg leading-relaxed">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
