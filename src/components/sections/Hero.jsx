import { content } from '../../config/content';
import Button from '../ui/Button';

export default function Hero() {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-mist via-mist-blue to-mist-deep border-b border-line">
      <div className="section-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <span className="label card inline-flex items-center gap-2 text-brand px-4 py-2 animate-fade-in-up">
            {hero.badge}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.08] mt-6 mb-6 animate-fade-in-up [animation-delay:100ms]">
            {hero.headline}
            <br />
            <span className="text-brand">{hero.headlineAccent}</span>
          </h1>

          <p className="text-lg text-ink-muted max-w-xl mb-9 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            {hero.subheading}
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up [animation-delay:300ms]">
            <Button to={hero.ctaPrimary.to} variant="primary">
              {hero.ctaPrimary.label}
            </Button>
            <Button to={hero.ctaSecondary.to} variant="secondary">
              {hero.ctaSecondary.label}
            </Button>
          </div>

          <dl className="flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-in-up [animation-delay:400ms]">
            {hero.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {/* Hairline separator only once the row fits on one line. */}
                {i > 0 && <span className="hidden sm:block w-px h-9 bg-line" aria-hidden="true" />}
                <div>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-serif font-semibold text-brand-dark leading-none">
                    {stat.value}
                  </dd>
                  <dd className="text-sm text-ink-muted mt-1">{stat.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:150ms] pb-16 sm:pb-20 lg:pb-0">
          <div className="photo-frame aspect-[4/5] max-w-sm ml-auto mr-auto lg:mr-0">
            <img src={hero.photo.src} alt={hero.photo.alt} className="w-full h-full object-cover" />
          </div>

          {/* The mountain the milk comes from, tucked under the workshop photo. */}
          <div className="photo-frame absolute -bottom-2 left-0 sm:left-4 lg:-left-6 w-40 sm:w-52 aspect-[4/3] border-4 border-paper">
            <img src={hero.inset.src} alt={hero.inset.alt} className="w-full h-full object-cover" />
          </div>

          <div className="absolute -top-3 right-2 lg:-right-4 w-24 h-24 rounded-full bg-brand text-white flex flex-col items-center justify-center text-center animate-float">
            <span className="text-micro uppercase tracking-widest text-white/75">{hero.seal.top}</span>
            <span className="font-serif font-semibold text-2xl leading-none">{hero.seal.value}</span>
            <span className="text-micro uppercase tracking-wide text-white/75 px-2 leading-tight mt-0.5">
              {hero.seal.bottom}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
