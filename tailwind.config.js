/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.jsx",
    "./templates/**/*.html.twig",
    "./vendor/**/*.html.twig",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat' : ['Montserrat', 'sans-serif'] 
      },
      colors: {
        shell: '#015289',
        lite: '#9d9d9d',
        mario: '#FE0000',
        lumi: '#40C5EC'
      }
    },
  },
  plugins: [],
}

