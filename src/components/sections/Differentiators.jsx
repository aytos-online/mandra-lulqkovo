import { content } from '../../config/content';

export default function Differentiators() {
  return (
    <section className="section-container">
      <h2 className="font-serif font-bold text-3xl text-ink mb-10">Какво ни отличава</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {content.differentiators.map((item, i) => (
          <div key={item.title} className="bg-cream-deep/60 rounded-2xl p-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-paper text-ink font-serif font-bold mb-4">
              {i + 1}
            </span>
            <h3 className="font-serif font-bold text-lg text-ink mb-2">{item.title}</h3>
            <p className="text-ink-muted text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
