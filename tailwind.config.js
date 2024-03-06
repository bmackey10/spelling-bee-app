/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        'bee-yellow': '#f7da00'
      },
      fontFamily: {
        'zilla-slab': ['"Zilla Slab"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

