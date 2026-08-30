export default function Nav({ className = '' }) {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`flex gap-8 items-center ${className}`}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-cream hover:text-gold transition-colors font-medium"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
