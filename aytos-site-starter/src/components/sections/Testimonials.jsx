import { content } from '../../config/content';
import Card from '../ui/Card';

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-ink/80 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-ink">{testimonial.author}</p>
                <p className="text-sm text-ink/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
