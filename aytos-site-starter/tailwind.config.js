/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14213D',      // Ink Navy — primary background, headers
        gold: '#D9A441',     // Wheat Gold — primary accent, CTAs
        rust: '#B4540A',     // Warm Rust — secondary accent, hover states
        cream: '#F5EFE6',    // primary text on dark backgrounds
      },
      fontFamily: {
        sans: ['Carlito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
