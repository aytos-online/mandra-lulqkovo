import { content } from '../../config/content';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="home" className="hero-gradient text-cream py-20 md:py-32">
      <div className="section-container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gold">
          {content.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
          {content.hero.subheading}
        </p>
        <Button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          {content.hero.ctaText}
        </Button>
      </div>
    </section>
  );
}
