import { Link } from 'react-router-dom';
import { content } from '../config/content';
import { siteConfig } from '../config/site.config';
import PageHeader from '../components/layout/PageHeader';
import StoreCard from '../components/sections/StoreCard';
import CtaBand from '../components/sections/CtaBand';
import Reveal from '../components/ui/Reveal';

export default function Stores() {
  const { stores } = content;

  return (
    <>
      <PageHeader eyebrow="Магазини" title="Къде се намираме" lead={stores.intro} />

      <section className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.list.map((store, i) => (
            <Reveal key={store.name + store.city} delay={i * 100} className="h-full">
              <StoreCard store={store} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 bg-mist-deep border border-line rounded p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <p className="text-ink-muted leading-relaxed max-w-xl">{stores.note}</p>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href={`tel:${siteConfig.business.phone}`} className="btn-primary no-underline">
              Обадете се
            </a>
            <Link to="/products" className="btn-secondary no-underline">
              Вижте продуктите
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
