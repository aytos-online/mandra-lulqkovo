import ProductCatalog from '../components/sections/ProductCatalog';

export default function Products() {
  return (
    <section className="section-container">
      <p className="eyebrow mb-3">Продукти</p>
      <h1 className="font-serif font-bold text-4xl md:text-5xl text-ink mb-4">Нашите продукти</h1>
      <p className="text-ink-muted max-w-xl mb-10">
        Продуктова информация и приблизителен грамаж — без наличности и цени. За текущи количества, свържете се
        с нас.
      </p>
      <ProductCatalog />
    </section>
  );
}
