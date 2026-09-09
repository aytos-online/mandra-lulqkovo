import { Link } from 'react-router-dom';
import { FolkStar } from '../components/ui/FolkPattern';

export default function NotFound() {
  return (
    <section className="section-container text-center">
      <FolkStar className="w-12 h-12 mx-auto mb-6" />
      <p className="eyebrow mb-3">404</p>
      <h1 className="font-serif font-bold text-3xl md:text-4xl text-ink mb-4">
        Тази страница я няма
      </h1>
      <p className="text-ink-muted max-w-md mx-auto mb-8">
        Може да е преместена или адресът да е сгрешен. Опитайте оттук:
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/" className="btn-primary no-underline">
          Към началото
        </Link>
        <Link to="/products" className="btn-secondary no-underline">
          Вижте продуктите
        </Link>
      </div>
    </section>
  );
}
