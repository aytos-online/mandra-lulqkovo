import { content } from '../../config/content';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import DripDivider from '../ui/DripDivider';
import { FolkBand } from '../ui/FolkPattern';

export default function FarmBanner() {
  const { farmBanner } = content;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={farmBanner.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Warm rather than neutral, so the photo sits in the same family as the
          rest of the palette instead of reading as a stock header. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-maroon-deep/95 via-espresso/85 to-espresso/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/30"
        aria-hidden="true"
      />

      {/* Milk running down into the photo from the section above. */}
      <div className="absolute -top-px left-0 w-full leading-none z-10" aria-hidden="true">
        <DripDivider count={34} className="w-full h-8 sm:h-10 md:h-12 text-cream" />
      </div>

      <FolkBand
        height={16}
        className="absolute bottom-0 left-0 w-full z-10"
        threads={{ a: '#EFA92B', b: '#C22E2A', c: '#FDF3E0' }}
      />

      <div className="section-container relative py-0">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-honey mb-3">{farmBanner.eyebrow}</p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-5">
            {farmBanner.heading}
          </h2>
          <p className="text-cream/90 mb-8 leading-relaxed text-lg">{farmBanner.text}</p>
          <Button to={farmBanner.cta.to} variant="cream">
            {farmBanner.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
