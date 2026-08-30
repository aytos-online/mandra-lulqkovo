import { content } from '../../config/content';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="hero-gradient text-cream py-16">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
          {content.cta.headline}
        </h2>
        <p className="text-lg text-cream/90 mb-8">
          {content.cta.subheading}
        </p>
        <Button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          {content.cta.buttonText}
        </Button>
      </div>
    </section>
  );
}
