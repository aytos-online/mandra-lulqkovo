import { Link } from 'react-router-dom';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  light: 'btn-light',
  // For the dark green bands, where an outline reads better than a second fill.
  ghost:
    'inline-flex items-center justify-center gap-2 border border-white/45 text-white px-7 py-3.5 rounded font-semibold hover:bg-white/10 hover:border-white hover:text-white transition-colors duration-200',
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
