import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { content } from '../../config/content';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">{siteConfig.business.name}</h3>
            <p className="text-cream/70 text-sm">
              Семейна мандра {siteConfig.business.tagline.toLowerCase()} {content.footer.note}
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-cream/60 mb-4">Страници</h4>
            <ul className="flex flex-col gap-2">
              {siteConfig.nav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-cream/80 hover:text-cream text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-cream/60 mb-4">Контакти</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="text-cream/80">{siteConfig.business.village}</li>
              <li>
                <a href={`tel:${siteConfig.business.phone}`} className="text-cream/80 hover:text-cream transition-colors">
                  {siteConfig.business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.business.email}`} className="text-cream/80 hover:text-cream transition-colors">
                  {siteConfig.business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center text-cream/50 text-sm">
          <p>&copy; 1994–{new Date().getFullYear()} {siteConfig.business.name}</p>
        </div>
      </div>
    </footer>
  );
}
