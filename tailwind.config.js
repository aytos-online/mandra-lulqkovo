/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ground tones — warm wheat rather than washed-out beige.
        cream: '#FDF3E0',
        'cream-deep': '#F7E2B8',
        paper: '#FFFFFF',
        ink: '#2B1A12',
        'ink-muted': '#6E594A',

        // Primary: the madder red of Bulgarian folk embroidery.
        maroon: '#C22E2A',
        'maroon-dark': '#9C1F1C',
        'maroon-deep': '#7A1613',

        // Deep greens — used as full bands, so they carry cream text.
        olive: '#3E7A46',
        'olive-dark': '#2E5C34',

        espresso: '#231610',

        // Bright folk accents.
        honey: '#EFA92B',
        'honey-dark': '#C9860F',
        sky: '#2E8FC0',
        'sky-dark': '#1E6B93',
        meadow: '#5CA45E',
        'meadow-dark': '#3E7A46',
        sun: '#F5C22B',
        'sun-dark': '#D9A20D',
        coral: '#E8683F',
        'coral-dark': '#C74C25',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Carlito', 'system-ui', 'sans-serif'],
      },
      rotate: {
        1.5: '1.5deg',
        '-1.5': '-1.5deg',
        2.5: '2.5deg',
        '-2.5': '-2.5deg',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-2deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
