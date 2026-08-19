import Nav from './Nav';

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 md:hidden" onClick={onClose}>
      <div
        className="absolute top-16 left-0 right-0 bg-ink/95 backdrop-blur border-b border-gold/20 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col gap-4">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Services', href: '#services' },
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream hover:text-gold transition-colors font-medium block py-2"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
