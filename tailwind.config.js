/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f5ede3',
        secondary: '#2d2d2d',
        cream: '#f5ede3',
        beige: '#e8dfd7',
        dark: '#2d2d2d',
        light: '#f9f7f4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
