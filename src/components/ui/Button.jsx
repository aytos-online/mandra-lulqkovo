import { Link } from 'react-router-dom';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  cream: 'btn-cream',
  // For use on the maroon and espresso bands, where an outline reads better
  // than a second filled button.
  ghost:
    'inline-flex items-center justify-center gap-2 border-2 border-cream/50 text-cream px-7 py-3.5 rounded-full font-bold hover:bg-cream/10 hover:border-cream transition-colors duration-150',
};

export default function Button({ children, variant = 'primary', to, href, className = '', ...props }) {
  const classes = `${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
