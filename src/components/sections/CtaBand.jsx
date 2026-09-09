import { content } from '../../config/content';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { FolkBand, FolkWeave } from '../ui/FolkPattern';

// Closing invitation, repeated at the foot of every page so there is always a
// next step — the site sells nothing online, so the goal is a visit or a call.
export default function CtaBand() {
  const { ctaBand } = content;

  return (
    <section className="relative bg-maroon text-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FolkWeave size={120} color="#FDF3E0" opacity={0.1} />
      </div>
      <FolkBand
        height={16}
        className="absolute top-0 left-0 w-full"
        threads={{ a: '#FDF3E0', b: '#EFA92B', c: '#7A1613' }}
      />
      <FolkBand
        height={16}
        className="absolute bottom-0 left-0 w-full"
        threads={{ a: '#FDF3E0', b: '#EFA92B', c: '#7A1613' }}
      />

      <div className="section-container relative">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">{ctaBand.heading}</h2>
          <p className="text-cream/85 leading-relaxed mb-8">{ctaBand.text}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to={ctaBand.primary.to} variant="cream">
              {ctaBand.primary.label}
            </Button>
            <Button to={ctaBand.secondary.to} variant="ghost">
              {ctaBand.secondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
