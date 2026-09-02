import { content } from '../../config/content';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import PhotoCredit from '../ui/PhotoCredit';

export default function Hero() {
  const { hero } = content;

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div
        className="absolute -top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-cream-deep/60 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div className="section-container relative grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="outline" className="mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-maroon" />
            {hero.badge}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
            {hero.headline}
          </h1>

          <p className="text-lg text-ink-muted max-w-xl mb-8">{hero.subheading}</p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button to={hero.ctaPrimary.to} variant="primary">
              {hero.ctaPrimary.label}
            </Button>
            <Button to={hero.ctaSecondary.to} variant="secondary">
              {hero.ctaSecondary.label}
            </Button>
          </div>

          <dl className="flex gap-10">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-serif font-bold text-ink">{stat.value}</dd>
                <dd className="text-sm text-ink-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative rounded-tl-[5rem] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src={hero.image.url}
              alt="Млечни продукти от мандрата"
              className="w-full h-full object-cover"
            />
            <PhotoCredit credit={hero.image.credit} />
          </div>

          <div className="absolute -bottom-6 left-6 bg-paper rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-cream-deep text-ink font-serif font-bold">
              {hero.statCallout.value}
            </span>
            <span>
              <span className="block font-semibold text-ink text-sm">{hero.statCallout.label}</span>
              <span className="block text-ink-muted text-xs italic">{hero.statCallout.sub}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
