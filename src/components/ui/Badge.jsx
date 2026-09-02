export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-cream-deep text-ink',
    maroon: 'bg-maroon text-cream',
    outline: 'border border-ink/15 text-ink-muted bg-paper',
  };

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
