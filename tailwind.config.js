/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ground tones — white and cool, washed with a little green-blue so the
        // page reads as fresh dairy rather than as a warm rustic kitchen.
        paper: '#FFFFFF',
        mist: '#F4FAF9',
        'mist-deep': '#E7F2F1',
        'mist-blue': '#EAF3FA',
        line: '#D8E8E5',

        ink: '#15302C',
        'ink-muted': '#54726E',
        'ink-soft': '#8CA7A3',

        // Primary: a clear meadow green. `deep` is the dark ground used for the
        // footer and the closing band, where it carries white text.
        brand: '#2E8F6E',
        'brand-dark': '#1F6E54',
        'brand-deep': '#123F33',

        // Secondary accent — the cold water side of the palette.
        azure: '#2D87B8',
        'azure-dark': '#1E6B93',

        // One light shade per milk, all inside the green/blue family so the
        // catalogue stays a single set.
        sky: '#4FA3D1',
        'sky-dark': '#2F82AE',
        meadow: '#4FAE86',
        'meadow-dark': '#2F8C67',
        mint: '#6FC7BC',
        'mint-dark': '#3FA69A',
        lagoon: '#6C8FC9',
        'lagoon-dark': '#4B6FAE',
      },
      fontSize: {
        // The two steps below text-sm. Everything smaller used to be an ad-hoc
        // arbitrary value; `label` carries the uppercase tracking with it.
        micro: ['10px', { lineHeight: '1.3' }],
        label: ['11.5px', { letterSpacing: '0.16em', lineHeight: '1.4' }],
      },
      boxShadow: {
        // The site's only shadow: a card lifting on hover.
        card: '0 16px 32px -22px rgba(21, 48, 44, 0.45)',
      },
      fontFamily: {
        serif: ['Literata', 'Georgia', 'serif'],
        sans: ['Manrope', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
