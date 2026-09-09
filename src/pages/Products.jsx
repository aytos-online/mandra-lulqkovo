import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import ProductCatalog from '../components/sections/ProductCatalog';
import CtaBand from '../components/sections/CtaBand';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category');

  const handleCategoryChange = (id) => {
    const next = new URLSearchParams(searchParams);
    if (id) {
      next.set('category', id);
    } else {
      next.delete('category');
    }
    setSearchParams(next, { replace: true });
  };

  return (
    <>
      <PageHeader
        eyebrow="Продукти"
        title="Нашите продукти"
        lead="Продуктова информация и приблизителен грамаж — без наличности и цени. Овчето и козето мляко са сезонни, затова се обадете за текущи количества."
      />

      <section className="section-container">
        <ProductCatalog activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      </section>

      <CtaBand />
    </>
  );
}
