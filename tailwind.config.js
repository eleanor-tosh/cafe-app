/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'grey-ish': '#e6e3de',
        'text-grey': '#5f5b5a',
        bean: '#c98d50',
      },
      backgroundImage: {
        hero: "url('/public/images/beans-and-press-trimmed.jpg')",
      },
    },
  },
  plugins: [],
}
