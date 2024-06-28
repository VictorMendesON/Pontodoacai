/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['PT Serif','sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/capa.png')"
      }
    },
  },
  plugins: [],
}

