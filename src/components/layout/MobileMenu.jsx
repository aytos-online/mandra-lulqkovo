import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import logo from '../../assets/images/mandra/adi-milk-logo.webp';

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
        className={`absolute inset-0 bg-brand-deep/50 transition-opacity duration-300 ${
          entered ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`absolute inset-y-0 right-0 w-[85%] max-w-xs bg-paper flex flex-col transition-transform duration-300 ease-out ${
          entered ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-brand px-5 py-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="inline-flex flex-shrink-0 bg-paper rounded px-2 py-1">
              <img src={logo} alt={siteConfig.business.legalName} className="h-5 w-auto" />
            </span>
            <div className="min-w-0">
              <p className="font-serif font-semibold text-white text-base leading-tight truncate">
                {siteConfig.business.name}
              </p>
              <p className="label text-white/75">
                {siteConfig.business.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Затвори менюто"
            className="flex items-center justify-center w-9 h-9 rounded bg-white/15 text-white hover:bg-white/25 transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-5">
          {siteConfig.nav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center min-h-[52px] border-b border-line text-base no-underline transition-colors ${
                  isActive ? 'text-brand font-semibold' : 'text-ink font-medium hover:text-brand'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-5 flex flex-col gap-3">
          <Link to="/stores" onClick={onClose} className="btn-primary w-full text-sm">
            Къде ни продават
          </Link>
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="flex items-center justify-center gap-2 text-ink font-semibold text-sm no-underline"
          >
            <span aria-hidden="true">☎</span> {siteConfig.business.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
