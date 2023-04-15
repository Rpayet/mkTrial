/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
    "./vendor/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        shell: '#015289'
      }
    },
  },
  plugins: [],
}

