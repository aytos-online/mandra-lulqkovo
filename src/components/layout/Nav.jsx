import { NavLink } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

export default function Nav({ vertical = false, onLinkClick }) {
  return (
    <nav className={`flex ${vertical ? 'flex-col items-stretch gap-1' : 'items-center gap-7'}`}>
      {siteConfig.nav.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `text-sm no-underline border-b-2 py-1.5 transition-colors ${
              isActive
                ? 'text-ink font-semibold border-brand'
                : 'text-ink font-medium border-transparent hover:text-brand'
            } ${vertical ? 'text-center' : ''}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
