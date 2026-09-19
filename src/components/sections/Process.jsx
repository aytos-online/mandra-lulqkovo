import { Link } from 'react-router-dom';
import { content } from '../../config/content';
import Reveal from '../ui/Reveal';

const ACCENT = {
  sky: 'bg-sky',
  mint: 'bg-mint',
  meadow: 'bg-meadow',
  lagoon: 'bg-lagoon',
};

export default function Process() {
  const { process } = content;

  return (
    <section className="section-tint">
      <div className="section-container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-3">{process.eyebrow}</p>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-4">{process.heading}</h2>
          <p className="text-ink-muted leading-relaxed mb-12">{process.intro}</p>
        </Reveal>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 110} as="li">
              <div className="relative">
                <span
                  className={`flex items-center justify-center w-14 h-14 rounded-full ${
                    ACCENT[step.accent] ?? 'bg-brand'
                  } text-white font-serif font-semibold text-xl`}
                >
                  {i + 1}
                </span>
                {/* Hairline run linking the steps, desktop only. */}
                {i < process.steps.length - 1 && (
                  <span
                    className="hidden lg:block absolute top-7 left-[4rem] right-[-1.5rem] border-t border-line"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="font-serif font-semibold text-ink text-lg mt-5 mb-2">{step.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200} className="mt-12">
          <Link to={process.cta.to} className="font-semibold text-brand hover:text-brand-dark">
            {process.cta.label} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
