import Hero from '../components/sections/Hero';
import ProductCatalog from '../components/sections/ProductCatalog';
import AboutTeaser from '../components/sections/AboutTeaser';
import Differentiators from '../components/sections/Differentiators';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section-container">
        <p className="eyebrow mb-3">Продукти</p>
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mb-10 max-w-md">
          Какво ще намерите при нас
        </h2>
        <ProductCatalog limit={4} showViewAllLink />
      </section>

      <AboutTeaser />
      <Differentiators />
    </>
  );
}
