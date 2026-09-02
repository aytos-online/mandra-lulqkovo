import { Link } from 'react-router-dom';
import { content } from '../../config/content';

export default function AboutTeaser() {
  const photo = content.about.photos[0];

  return (
    <section className="bg-olive text-cream relative overflow-hidden">
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-cream/5 pointer-events-none"
        aria-hidden="true"
      />
      <div className="section-container relative grid md:grid-cols-[auto_1fr] gap-10 items-center">
        <h2 className="font-serif font-bold text-3xl md:text-4xl leading-tight max-w-xs">
          Повече за нашата мандра
        </h2>

        <div className="grid md:grid-cols-[12rem_1fr] gap-8 items-center">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-48 h-48 rounded-full object-cover border-4 border-cream/20 mx-auto md:mx-0"
          />
          <div>
            <p className="text-cream/90 leading-relaxed mb-4">{content.about.intro[1]}</p>
            <Link to="/about" className="font-semibold text-cream underline underline-offset-4 hover:text-cream/80">
              Целият разказ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
