/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/index.html', './src/index2.html', './src/documents.html' ,"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        pop: 'Inter, sans-serif',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}