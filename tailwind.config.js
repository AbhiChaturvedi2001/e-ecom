/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'bebas': ['"Bebas Neue"', 'cursive'],
        'poppins':['"Poppins"','sans-serif']
      }
    },
  },
  plugins: [],
}
