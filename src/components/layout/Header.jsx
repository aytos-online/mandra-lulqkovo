import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
// The client's own mark, trimmed to its artwork — the supplied file carries it
// inside a 1000x1000 canvas that is two thirds empty.
import logo from '../../assets/images/mandra/adi-milk-logo.webp';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-paper border-b border-line sticky top-0 z-40">
      <div className="section-container !py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 sm:gap-4 no-underline">
          <img
            src={logo}
            alt={siteConfig.business.legalName}
            className="h-9 sm:h-10 w-auto"
          />
          <span className="border-l border-line pl-3 sm:pl-4">
            <span className="block font-serif font-semibold text-lg text-ink leading-tight">
              {siteConfig.business.name}
            </span>
            <span className="eyebrow block">{siteConfig.business.tagline}</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Nav />
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="hidden lg:inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded text-sm font-semibold no-underline hover:bg-brand-dark hover:text-white transition-colors"
          >
            <span aria-hidden="true">☎</span>
            {siteConfig.business.phone}
          </a>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded border border-line text-ink"
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
      </div>

      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </header>
  );
}
