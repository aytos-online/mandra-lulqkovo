import { useId } from 'react';

// Flat, front-facing head marks for the four milks. Drawn as silhouettes rather
// than illustrations so they sit on the folk-colour medallions the same way a
// stamped or embroidered mark would — and so eyes and nostrils punch through to
// the medallion instead of needing a second colour.
//
// Each entry returns { body, cuts }: body shapes are the silhouette, cut shapes
// are knocked back out of it.

const MARKS = {
  krave: {
    body: (
      <>
        <path
          d="M21 17 C16 10 11 6 6 6"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M43 17 C48 10 53 6 58 6"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <ellipse cx="10" cy="29" rx="10" ry="5.5" transform="rotate(-20 10 29)" />
        <ellipse cx="54" cy="29" rx="10" ry="5.5" transform="rotate(20 54 29)" />
        <path d="M32 12 C45 12 51 21 51 32 C51 44 43 53 32 55 C21 53 13 44 13 32 C13 21 19 12 32 12 Z" />
        <ellipse cx="32" cy="45" rx="14" ry="10" />
      </>
    ),
    cuts: (
      <>
        <ellipse cx="24" cy="30" rx="2.7" ry="3.3" />
        <ellipse cx="40" cy="30" rx="2.7" ry="3.3" />
        <ellipse cx="27" cy="46" rx="2.2" ry="3" transform="rotate(-18 27 46)" />
        <ellipse cx="37" cy="46" rx="2.2" ry="3" transform="rotate(18 37 46)" />
      </>
    ),
  },

  ovche: {
    body: (
      <>
        <ellipse cx="11" cy="34" rx="9" ry="5" transform="rotate(30 11 34)" />
        <ellipse cx="53" cy="34" rx="9" ry="5" transform="rotate(-30 53 34)" />
        <ellipse cx="32" cy="38" rx="13" ry="16" />
        <circle cx="14" cy="22" r="9.5" />
        <circle cx="23" cy="19" r="10" />
        <circle cx="32" cy="17" r="10.5" />
        <circle cx="41" cy="19" r="10" />
        <circle cx="50" cy="22" r="9.5" />
        <circle cx="20" cy="11" r="7.5" />
        <circle cx="32" cy="8" r="8" />
        <circle cx="44" cy="11" r="7.5" />
      </>
    ),
    cuts: (
      <>
        <ellipse cx="26" cy="36" rx="2.6" ry="3" />
        <ellipse cx="38" cy="36" rx="2.6" ry="3" />
        <ellipse cx="32" cy="47" rx="3.2" ry="2.2" />
      </>
    ),
  },

  koze: {
    body: (
      <>
        <path
          d="M25 15 C20 7 14 2 7 1"
          fill="none"
          stroke="#fff"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M39 15 C44 7 50 2 57 1"
          fill="none"
          stroke="#fff"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <ellipse cx="12" cy="31" rx="9.5" ry="4.5" transform="rotate(20 12 31)" />
        <ellipse cx="52" cy="31" rx="9.5" ry="4.5" transform="rotate(-20 52 31)" />
        <path d="M32 13 C42 13 46 21 45 30 C44 40 38 50 32 54 C26 50 20 40 19 30 C18 21 22 13 32 13 Z" />
        <path d="M27 50 C27 58 30 63 32 63 C34 63 37 58 37 50 Z" />
      </>
    ),
    cuts: (
      <>
        <ellipse cx="25" cy="29" rx="2.6" ry="2.5" />
        <ellipse cx="39" cy="29" rx="2.6" ry="2.5" />
        <ellipse cx="29.5" cy="44" rx="1.7" ry="2.2" />
        <ellipse cx="34.5" cy="44" rx="1.7" ry="2.2" />
      </>
    ),
  },

  bivolsko: {
    body: (
      <>
        <path
          d="M22 21 C12 23 4 19 3 9"
          fill="none"
          stroke="#fff"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M42 21 C52 23 60 19 61 9"
          fill="none"
          stroke="#fff"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <ellipse cx="11" cy="33" rx="7.5" ry="4.5" transform="rotate(-15 11 33)" />
        <ellipse cx="53" cy="33" rx="7.5" ry="4.5" transform="rotate(15 53 33)" />
        <path d="M32 14 C46 14 52 23 52 34 C52 45 44 54 32 56 C20 54 12 45 12 34 C12 23 18 14 32 14 Z" />
        <ellipse cx="32" cy="46" rx="15" ry="9.5" />
      </>
    ),
    cuts: (
      <>
        <ellipse cx="23" cy="31" rx="2.7" ry="3.2" />
        <ellipse cx="41" cy="31" rx="2.7" ry="3.2" />
        <ellipse cx="27" cy="47" rx="2.4" ry="3.1" transform="rotate(-18 27 47)" />
        <ellipse cx="37" cy="47" rx="2.4" ry="3.1" transform="rotate(18 37 47)" />
      </>
    ),
  },
};

export default function AnimalMark({ animal, className = '' }) {
  const uid = useId();
  const mark = MARKS[animal];
  if (!mark) return null;

  const maskId = `animal-${animal}-${uid}`;

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <g fill="#fff">{mark.body}</g>
        <g fill="#000">{mark.cuts}</g>
      </mask>
      <rect width="64" height="64" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
}
