import Nav from './Nav';

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 md:hidden z-50" onClick={onClose}>
      <div
        className="absolute top-16 left-0 right-0 bg-cream border-b border-ink/10 p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Nav vertical onLinkClick={onClose} />
      </div>
    </div>
  );
}
