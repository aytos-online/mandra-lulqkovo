import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import { FolkBand, FolkStar } from '../ui/FolkPattern';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cream/95 backdrop-blur sticky top-0 z-40">
      <div className="section-container !py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-maroon shadow-[0_3px_0_0_#7A1613]">
            <FolkStar
              className="w-7 h-7"
              threads={{ a: '#FDF3E0', b: '#FDF3E0', c: '#EFA92B' }}
            />
          </span>
          <span>
            <span className="block font-serif font-bold text-lg text-ink leading-tight">
              {siteConfig.business.name}
            </span>
            <span className="block text-[11px] font-bold tracking-[0.16em] text-maroon uppercase">
              {siteConfig.business.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Nav />
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="hidden lg:inline-flex items-center gap-2 bg-maroon text-cream px-5 py-2.5 rounded-full text-sm font-bold no-underline hover:bg-maroon-dark hover:text-cream transition-colors"
          >
            <span aria-hidden="true">☎</span>
            {siteConfig.business.phone}
          </a>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Затвори менюто' : 'Отвори менюто'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
      </div>

      {/* Embroidered hem instead of a hairline border. */}
      <FolkBand height={8} />
    </header>
  );
}
