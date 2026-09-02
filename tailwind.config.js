/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF3E7',        // page background
        'cream-deep': '#F4E4C9', // hero gradient warm end
        paper: '#FFFFFF',        // card backgrounds
        ink: '#2B211A',          // headings / primary text
        'ink-muted': '#6B5F52',  // body copy, eyebrow labels
        maroon: '#8C3B2E',       // primary accent — buttons, active nav, links
        'maroon-dark': '#6E2E24',// hover state
        olive: '#59623F',        // about-teaser band background
        espresso: '#2B2019',     // footer background
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Carlito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
