/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'graphik': ["Graphik", "sans-serif"],
        'graphik-bold': ["Graphik-bold", "sans-serif"],
      },
      colors: {
        primary: '#2091F9',
        text: '#252B42',
        secondaryText: '#374754',
        darkBackground: '#252B42'
      }
    },
  },
  plugins: [],
}

