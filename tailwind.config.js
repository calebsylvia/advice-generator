/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      'colors': {
        'lightcyan': '#cee3e9',
        'neongreen': '#52ffa8',
        'grayishblue': '#4e5d73',
        'darkgrayishblue': '#323a49',
        'darkblue': '#1f2632'
      },
      fontFamily: {
        primary: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

