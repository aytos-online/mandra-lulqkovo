import { useState } from 'react';
import { siteConfig } from '../../config/site.config';
import Nav from './Nav';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-ink text-cream sticky top-0 z-50 shadow-lg">
      <div className="section-container flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gold">{siteConfig.business.name}</h1>
          <p className="text-sm text-cream/80">{siteConfig.business.tagline}</p>
        </div>

        <Nav className="hidden md:flex" />

        <button
          className="md:hidden text-gold hover:text-rust transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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
