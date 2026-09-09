import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { FolkBand, FolkStar } from '../ui/FolkPattern';

export default function MobileMenu({ onClose }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => {
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className={`absolute inset-0 bg-espresso/60 transition-opacity duration-300 ${
          entered ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`absolute inset-y-0 right-0 w-[85%] max-w-xs bg-cream shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          entered ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-maroon px-5 py-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <FolkStar
              className="w-8 h-8 flex-shrink-0"
              threads={{ a: '#FDF3E0', b: '#FDF3E0', c: '#EFA92B' }}
            />
            <div className="min-w-0">
              <p className="font-serif font-bold text-cream text-lg leading-tight truncate">
                {siteConfig.business.name}
              </p>
              <p className="text-[11px] font-bold text-cream/80 uppercase tracking-[0.16em]">
                {siteConfig.business.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Затвори менюто"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-cream/15 text-cream hover:bg-cream/25 transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <FolkBand height={10} threads={{ a: '#EFA92B', b: '#C22E2A', c: '#FDF3E0' }} />

        <nav className="flex flex-col p-4 gap-1">
          {siteConfig.nav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `px-4 py-3.5 rounded-xl text-base font-bold no-underline transition-colors ${
                  isActive ? 'bg-maroon text-cream hover:text-cream' : 'text-ink hover:bg-maroon/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-5 border-t border-ink/10 flex flex-col gap-3">
          <Link to="/stores" onClick={onClose} className="btn-primary w-full text-sm">
            Къде ни продават
          </Link>
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="flex items-center justify-center gap-2 text-ink font-bold text-sm no-underline"
          >
            <span aria-hidden="true">☎</span> {siteConfig.business.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
