import { useId } from 'react';

// Bulgarian cross-stitch (шевица) drawn the way the real embroidery is made:
// on a square grid where every mark is a single stitch. Keeping the motifs as
// grids rather than freehand paths is what makes them read as authentic rather
// than as generic "ethnic" decoration — and it keeps them crisp at any size.
//
// '.' = bare cloth, 'a'/'b'/'c' = the three thread colours of the motif.

// Repeating border chain of linked diamonds (ромб) — the most common shevitsa
// edge motif. 8x8 so the widest row touches the next tile and the chain runs on.
const DIAMOND_CHAIN = [
  '...aa...',
  '..abba..',
  '.abccba.',
  'abc..cba',
  'abc..cba',
  '.abccba.',
  '..abba..',
  '...aa...',
];

// Eight-pointed star (звезда) — the motif that sits at the centre of a shevitsa
// panel. Symmetric under 90° rotation, so it works as a standalone mark.
const STAR = [
  '.....a.....',
  '....aaa....',
  '...aabaa...',
  '..aa.b.aa..',
  '.aa..b..aa.',
  'aabbbcbbbaa',
  '.aa..b..aa.',
  '..aa.b.aa..',
  '...aabaa...',
  '....aaa....',
  '.....a.....',
];

const DEFAULT_THREADS = { a: '#C22E2A', b: '#9C1F1C', c: '#EFA92B' };

function stitches(rows, threads) {
  const cells = [];
  rows.forEach((row, y) => {
    [...row].forEach((code, x) => {
      const fill = threads[code];
      if (!fill) return;
      // 0.04 of overlap closes the hairline seams antialiasing leaves between
      // neighbouring stitches when the grid is scaled up.
      cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={1.04} height={1.04} fill={fill} />);
    });
  });
  return cells;
}

/**
 * Horizontal embroidered band. Repeats the diamond chain across the full width
 * at whatever height it is given, so it works as a section divider, a card
 * header rule, or a full-bleed ribbon.
 */
export function FolkBand({ height = 22, threads, className = '', ground = 'none' }) {
  const uid = useId();
  const patternId = `folk-band-${uid}`;
  const palette = { ...DEFAULT_THREADS, ...threads };

  return (
    <svg
      className={className}
      width="100%"
      height={height}
      aria-hidden="true"
      focusable="false"
      style={{ display: 'block' }}
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={height}
          height={height}
          viewBox="0 0 8 8"
        >
          {ground !== 'none' && <rect width="8" height="8" fill={ground} />}
          {stitches(DIAMOND_CHAIN, palette)}
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#${patternId})`} />
    </svg>
  );
}

/**
 * The eight-pointed star on its own — the house mark. Used in the logo, as a
 * list bullet, and as a seal on photo cards.
 */
export function FolkStar({ threads, className = '', title }) {
  const palette = { ...DEFAULT_THREADS, ...threads };
  return (
    <svg
      viewBox="0 0 11 11"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {stitches(STAR, palette)}
    </svg>
  );
}

/**
 * Large, low-contrast star tiled behind a section — the woven-cloth ground that
 * ties the pages together without competing with the copy on top.
 */
export function FolkWeave({ size = 132, color = '#C22E2A', opacity = 0.07, className = '' }) {
  const uid = useId();
  const patternId = `folk-weave-${uid}`;

  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={size}
          height={size}
          viewBox="0 0 11 11"
        >
          {stitches(STAR, { a: color, b: color, c: color })}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity={opacity} />
    </svg>
  );
}
