import { content } from '../../config/content';
import Button from '../ui/Button';
import { FolkBand, FolkStar, FolkWeave } from '../ui/FolkPattern';

export default function Hero() {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream-deep to-honey/40">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FolkWeave size={124} color="#9C1F1C" opacity={0.05} />
      </div>

      <div className="section-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center pb-24 lg:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 bg-maroon text-cream px-4 py-2 rounded-full text-xs font-bold tracking-[0.14em] uppercase shadow-[0_3px_0_0_#7A1613] animate-fade-in-up">
            <FolkStar className="w-3.5 h-3.5" threads={{ a: '#FDF3E0', b: '#FDF3E0', c: '#EFA92B' }} />
            {hero.badge}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.08] mt-6 mb-6 animate-fade-in-up [animation-delay:100ms]">
            {hero.headline}
            <br />
            <span className="text-maroon">{hero.headlineAccent}</span>
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

          <dl className="flex flex-wrap items-center gap-x-7 gap-y-4 animate-fade-in-up [animation-delay:400ms]">
            {hero.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-4 sm:gap-7">
                {/* Separator only once the row fits on one line; wrapped, it would orphan. */}
                {i > 0 && <FolkStar className="hidden sm:block w-4 h-4 opacity-70" />}
                <div>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-serif font-bold text-maroon-dark leading-none">{stat.value}</dd>
                  <dd className="text-sm text-ink-muted mt-1">{stat.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:150ms] pb-16 sm:pb-20 lg:pb-0">
          <div className="photo-frame aspect-[4/5] max-w-sm ml-auto mr-auto lg:mr-0 rotate-1.5">
            <img
              src={hero.photo.src}
              alt={hero.photo.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* The mountain the milk comes from, tucked under the workshop photo. */}
          <div className="photo-frame absolute -bottom-2 left-0 sm:left-4 lg:-left-6 w-40 sm:w-52 aspect-[4/3] -rotate-2.5">
            <img src={hero.inset.src} alt={hero.inset.alt} className="w-full h-full object-cover" />
          </div>

          <div className="absolute -top-3 right-2 lg:-right-4 w-24 h-24 rounded-full bg-maroon text-cream flex flex-col items-center justify-center text-center shadow-[0_6px_0_0_#7A1613] rotate-[8deg] animate-float-slow">
            <span className="text-[10px] uppercase tracking-widest opacity-80">{hero.seal.top}</span>
            <span className="font-serif font-bold text-2xl leading-none">{hero.seal.value}</span>
            <span className="text-[9px] uppercase tracking-wide opacity-80 px-2 leading-tight mt-0.5">
              {hero.seal.bottom}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full" aria-hidden="true">
        <FolkBand height={20} ground="#FDF3E0" />
      </div>
    </section>
  );
}
