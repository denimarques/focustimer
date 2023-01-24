/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "Roboto": ["Roboto", "sans-serif"],
    },
    extend: {
      colors:{
        "regence-blue": "#02799D",
        "regence-gray": "#E1E1E6",
      },
    },
  },
  plugins: [],
}
