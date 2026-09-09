import { content } from '../../config/content';
import Reveal from '../ui/Reveal';
import { FolkBand, FolkStar } from '../ui/FolkPattern';

const ACCENTS = [
  { band: { a: '#2E8FC0', b: '#1E6B93', c: '#EFA92B' }, badge: 'bg-sky' },
  { band: { a: '#F5C22B', b: '#D9A20D', c: '#C22E2A' }, badge: 'bg-sun' },
  { band: { a: '#5CA45E', b: '#3E7A46', c: '#EFA92B' }, badge: 'bg-meadow' },
];

export default function Differentiators() {
  return (
    <section className="section-container">
      <Reveal className="flex items-center gap-4 mb-10">
        <FolkStar className="w-6 h-6 flex-shrink-0" />
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink">Какво ни отличава</h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {content.differentiators.map((item, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <Reveal key={item.title} delay={i * 120} className="h-full">
              <div className="h-full bg-paper border-2 border-ink/10 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-maroon/30 hover:shadow-[0_18px_36px_-16px_rgba(43,26,18,0.45)]">
                <FolkBand height={14} threads={accent.band} />
                <div className="p-6 flex-1">
                  <span
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${accent.badge} text-espresso font-serif font-bold text-xl mb-4 shadow-[0_4px_0_0_rgba(43,26,18,0.18)]`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-ink mb-2">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
