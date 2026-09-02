import { Link } from 'react-router-dom';
import { content } from '../config/content';
import StoreCard from '../components/sections/StoreCard';
import PhotoCredit from '../components/ui/PhotoCredit';

export default function Stores() {
  const { stores } = content;

  return (
    <section className="section-container">
      <h1 className="font-serif font-bold text-4xl md:text-5xl text-ink mb-10">Къде ни продават</h1>

      <div className="bg-cream-deep/50 rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <img src={stores.featuredImage.url} alt="Магазин с местни продукти" className="w-full h-full object-cover" />
          <PhotoCredit credit={stores.featuredImage.credit} />
        </div>
        <div>
          <p className="text-ink-muted leading-relaxed mb-4">{stores.intro}</p>
          <Link to="/contact" className="font-semibold text-maroon hover:text-maroon-dark">
            Свържете се с нас
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stores.list.map((store) => (
          <StoreCard key={store.name + store.city} store={store} />
        ))}
      </div>
    </section>
  );
}
