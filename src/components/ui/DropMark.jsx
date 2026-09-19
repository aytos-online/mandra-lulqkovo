// A single drop of milk — the house mark. Replaces the embroidery motifs: one
// simple, cool-toned shape that works as a logo glyph and as a list bullet.
export default function DropMark({ className = '', title }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <path
        d="M12 2.5c4.2 5 6.6 8.4 6.6 11.4A6.6 6.6 0 0 1 12 20.5a6.6 6.6 0 0 1-6.6-6.6c0-3 2.4-6.4 6.6-11.4Z"
        fill="currentColor"
      />
      <path
        d="M9.2 13.6c0-1.6.9-3.2 2.4-4.9"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
