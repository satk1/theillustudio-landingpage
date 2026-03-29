/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FAFAF8',
        'surface': '#F5F4F0',
        'primary-text': '#1A1916',
        'muted-text': '#7A7870',
        'accent': '#C8860A',
      },
      fontFamily: {
        'display': ['var(--font-cormorant)', 'serif'],
        'body': ['var(--font-satoshi)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
