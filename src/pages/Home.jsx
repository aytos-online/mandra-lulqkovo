import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimalCategories from '../components/sections/AnimalCategories';
import Process from '../components/sections/Process';
import Differentiators from '../components/sections/Differentiators';
import FarmBanner from '../components/sections/FarmBanner';
import CtaBand from '../components/sections/CtaBand';
import Reveal from '../components/ui/Reveal';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section-container">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-3">Продукти</p>
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-4">
            Разгледайте по <span className="text-brand">вид мляко</span>
          </h2>
          <p className="text-ink-muted mb-10 leading-relaxed">
            Четири вида мляко, всяко със свой характер и продукти. Изберете животно, за да видите какво правим
            от неговото мляко.
          </p>
        </Reveal>

        <AnimalCategories linkMode />

        <Reveal delay={150} className="mt-10">
          <Link to="/products" className="font-semibold text-brand hover:text-brand-dark">
            Разгледайте всички продукти →
          </Link>
        </Reveal>
      </section>

      <FarmBanner />
      <Process />
      <Differentiators />
      <CtaBand />
    </>
  );
}
