import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import Nav from './Nav';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cream/95 backdrop-blur sticky top-0 z-40 border-b border-ink/5">
      <div className="section-container !py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-espresso text-cream font-serif font-bold text-lg">
            M
          </span>
          <span>
            <span className="block font-serif font-bold text-lg text-ink leading-tight">
              {siteConfig.business.name}
            </span>
            <span className="block text-xs tracking-wide text-ink-muted uppercase">
              {siteConfig.business.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden md:flex">
          <Nav />
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Отвори менюто"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
      </div>
    </header>
  );
}
