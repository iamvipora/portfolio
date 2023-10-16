/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'luxurious': ['Luxurious Roman', 'serif']
      }, 
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      } 
    }
  },
  plugins: [],
}                             