import { siteConfig } from '../../config/site.config';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream border-t border-gold/20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-gold font-bold mb-4">{siteConfig.business.name}</h3>
            <p className="text-cream/80 text-sm">{siteConfig.business.tagline}</p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Contact</h4>
            <p className="text-cream/80 text-sm mb-2">
              <a href={`tel:${siteConfig.business.phone}`} className="hover:text-gold transition-colors">
                {siteConfig.business.phone}
              </a>
            </p>
            <p className="text-cream/80 text-sm">
              <a href={`mailto:${siteConfig.business.email}`} className="hover:text-gold transition-colors">
                {siteConfig.business.email}
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} className="hover:text-gold transition-colors">
                  Instagram
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} className="hover:text-gold transition-colors">
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 text-center text-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
