import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { content } from '../../config/content';
import { FolkBand, FolkStar } from '../ui/FolkPattern';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <FolkBand height={18} threads={{ a: '#C22E2A', b: '#EFA92B', c: '#FDF3E0' }} />

      <div className="section-container !py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <FolkStar
                className="w-8 h-8 flex-shrink-0"
                threads={{ a: '#C22E2A', b: '#C22E2A', c: '#EFA92B' }}
              />
              <h3 className="font-serif font-bold text-lg">{siteConfig.business.name}</h3>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Семейна мандра {siteConfig.business.tagline.toLowerCase()} {content.footer.note}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-honey mb-4">Страници</h4>
            <ul className="flex flex-col gap-2">
              {siteConfig.nav.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-cream/80 hover:text-honey text-sm no-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-honey mb-4">По вид мляко</h4>
            <ul className="flex flex-col gap-2">
              {content.productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="text-cream/80 hover:text-honey text-sm no-underline transition-colors"
                  >
                    {cat.label} мляко
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-honey mb-4">Контакти</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={siteConfig.business.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/80 hover:text-honey no-underline transition-colors"
                >
                  {siteConfig.business.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="text-cream/80 hover:text-honey no-underline transition-colors"
                >
                  {siteConfig.business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="text-cream/80 hover:text-honey no-underline transition-colors"
                >
                  {siteConfig.business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-cream/50 text-sm">
          <p>
            &copy; 1994–{new Date().getFullYear()} {siteConfig.business.name}
          </p>
          <p>{siteConfig.business.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
