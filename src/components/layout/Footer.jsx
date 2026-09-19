import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { content } from '../../config/content';
import logo from '../../assets/images/mandra/adi-milk-logo.webp';

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white/80">
      <div className="section-container !py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col items-start gap-3 mb-4">
              <span className="inline-flex bg-paper rounded px-3 py-2">
                <img src={logo} alt={siteConfig.business.legalName} className="h-8 w-auto" />
              </span>
              <h3 className="font-serif font-semibold text-lg text-white">{siteConfig.business.name}</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Семейна мандра {siteConfig.business.tagline.toLowerCase()} {content.footer.note}
            </p>
          </div>

          <div>
            <h4 className="label text-mint mb-4">Страници</h4>
            <ul className="flex flex-col gap-2">
              {siteConfig.nav.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/75 hover:text-white text-sm no-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label text-mint mb-4">По вид мляко</h4>
            <ul className="flex flex-col gap-2">
              {content.productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="text-white/75 hover:text-white text-sm no-underline transition-colors"
                  >
                    {cat.label} мляко
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label text-mint mb-4">Контакти</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={siteConfig.business.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/75 hover:text-white no-underline transition-colors"
                >
                  {siteConfig.business.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="text-white/75 hover:text-white no-underline transition-colors"
                >
                  {siteConfig.business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="text-white/75 hover:text-white no-underline transition-colors"
                >
                  {siteConfig.business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-white/50 text-xs">
          <p>
            &copy; 1994–{new Date().getFullYear()} {siteConfig.business.name}
          </p>
          <p>{siteConfig.business.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
