// Depth ratios (0-1) for each drip, hand-tuned for an irregular, hand-poured look.
const DRIP_PATTERN = [0.4, 0.85, 0.3, 0.62, 0.95, 0.38, 0.7, 0.48, 0.9, 0.32, 0.58, 0.8, 0.42, 0.74, 0.5, 0.88];

function buildDripPath(count, width, height) {
  const segW = width / count;
  let d = 'M0,0';
  for (let i = 0; i < count; i++) {
    const x0 = i * segW;
    const x1 = x0 + segW;
    const xm = x0 + segW / 2;
    const depth = DRIP_PATTERN[i % DRIP_PATTERN.length] * height;
    const bulge = segW * 0.32;
    d += ` C${x0 + segW * 0.18},0 ${xm - bulge},${depth} ${xm},${depth}`;
    d += ` C${xm + bulge},${depth} ${x1 - segW * 0.18},0 ${x1},0`;
  }
  d += ' Z';
  return d;
}

export default function DripDivider({ className = '', color = 'currentColor', count = 16 }) {
  const width = 1440;
  const height = 100;
  const d = buildDripPath(count, width, height);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path d={d} fill={color} />
    </svg>
  );
}
