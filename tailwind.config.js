/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
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
        mario: '#FE0000'
      }
    },
  },
  plugins: [],
}

