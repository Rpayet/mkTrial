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
        lumi: '#40C5EC',
        silver: '#292929',
        fast: {
          200: '#ffe524',
          400: '#efc900'
        },
        slow: {
          200: '#02affc',
          400: '#0c3ffc'
        },
        first: {
          200: '#FAF500',
          400: '#FF7A00'
        },
        second: {
          200: '#869AB1',
          400: '#DEEAF4'
        },
        third: {
          200: '#F87600',
          400: '#FDDDB1'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

