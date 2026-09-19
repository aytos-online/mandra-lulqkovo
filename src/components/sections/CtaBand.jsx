import { content } from '../../config/content';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

// Closing invitation, repeated at the foot of every page so there is always a
// next step — the site sells nothing online, so the goal is a visit or a call.
export default function CtaBand() {
  const { ctaBand } = content;

  return (
    <section className="bg-brand text-white">
      <div className="section-container">
        <Reveal className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl mb-4 text-white">
            {ctaBand.heading}
          </h2>
          <p className="text-white/85 leading-relaxed mb-8">{ctaBand.text}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to={ctaBand.primary.to} variant="light">
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
