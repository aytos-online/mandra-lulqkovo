import { content } from '../../config/content';
import Reveal from '../ui/Reveal';

const ACCENTS = [
  { bar: 'bg-sky', badge: 'bg-sky' },
  { bar: 'bg-meadow', badge: 'bg-meadow' },
  { bar: 'bg-lagoon', badge: 'bg-lagoon' },
];

export default function Differentiators() {
  return (
    <section className="section-container">
      <Reveal className="mb-10">
        <span className="rule mb-5" aria-hidden="true" />
        <h2 className="font-serif font-semibold text-3xl md:text-4xl text-ink">Какво ни отличава</h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {content.differentiators.map((item, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <Reveal key={item.title} delay={i * 120} className="h-full">
              <div className="card card-lift h-full overflow-hidden flex flex-col">
                <span className={`block h-1 ${accent.bar}`} aria-hidden="true" />
                <div className="p-6 flex-1">
                  <span
                    className={`flex items-center justify-center w-11 h-11 rounded-full ${accent.badge} text-white font-serif font-semibold text-lg mb-4`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-serif font-semibold text-lg text-ink mb-2">{item.title}</h3>
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
