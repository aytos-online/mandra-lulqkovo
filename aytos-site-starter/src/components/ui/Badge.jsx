export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gold text-ink',
    secondary: 'bg-rust text-cream',
    outline: 'border border-gold text-gold',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
