import { siteConfig } from '../../config/site.config';
import Card from '../ui/Card';

export default function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <Card key={index}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
              <p className="text-ink/70">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
