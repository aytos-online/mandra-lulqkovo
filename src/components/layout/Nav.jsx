import { NavLink } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

export default function Nav({ vertical = false, onLinkClick }) {
  return (
    <nav className={`flex gap-1 ${vertical ? 'flex-col items-stretch' : 'items-center'}`}>
      {siteConfig.nav.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-bold no-underline transition-colors ${
              isActive
                ? 'bg-maroon text-cream hover:text-cream'
                : 'text-ink hover:bg-maroon/10 hover:text-maroon'
            } ${vertical ? 'text-center' : ''}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
