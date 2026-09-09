import { Link } from 'react-router-dom';
import { content } from '../../config/content';
import Reveal from '../ui/Reveal';
import { FolkBand, FolkStar } from '../ui/FolkPattern';

const ACCENT = {
  sky: 'bg-sky',
  sun: 'bg-sun',
  meadow: 'bg-meadow',
  coral: 'bg-coral',
};

export default function Process() {
  const { process } = content;

  return (
    <section className="relative texture-linen">
      <FolkBand height={16} className="absolute top-0 left-0 w-full" />
      <FolkBand height={16} className="absolute bottom-0 left-0 w-full" />

      <div className="section-container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-3">{process.eyebrow}</p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mb-4">{process.heading}</h2>
          <p className="text-ink-muted leading-relaxed mb-12">{process.intro}</p>
        </Reveal>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 110} as="li">
              <div className="relative">
                <span
                  className={`flex items-center justify-center w-16 h-16 rounded-full ${
                    ACCENT[step.accent] ?? 'bg-honey'
                  } text-espresso font-serif font-bold text-2xl border-4 border-paper shadow-[0_5px_0_0_rgba(43,26,18,0.18)]`}
                >
                  {i + 1}
                </span>
                {/* Dashed run linking the steps, desktop only. */}
                {i < process.steps.length - 1 && (
                  <span
                    className="hidden lg:block absolute top-8 left-[4.5rem] right-[-1.5rem] border-t-2 border-dashed border-maroon/30"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="font-serif font-bold text-ink text-lg mt-5 mb-2">{step.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200} className="mt-12 flex items-center gap-3">
          <FolkStar className="w-4 h-4" />
          <Link to={process.cta.to} className="font-bold text-maroon hover:text-maroon-dark">
            {process.cta.label} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
