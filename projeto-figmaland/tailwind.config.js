/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
        'graphik-bold': ["Graphik-bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}

