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
        shell: '#015289'
      }
    },
  },
  plugins: [],
}

