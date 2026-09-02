export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-paper border border-ink/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );
}
