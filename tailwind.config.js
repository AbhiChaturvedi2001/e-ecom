/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  theme: {
    extend: {
      fontFamily:{
        'bebas': ['"Bebas Neue"', 'cursive'],
        'poppins':['"Poppins"','sans-serif'],
        'concert':['"Concert One"', 'cursive']
      },
      screens: {
        'md': {'max': '1068px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
