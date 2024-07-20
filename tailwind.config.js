/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ComforantGaram: ['ComforantGaram'],
        Tektur: ['Tektur'],
        Montserrat: ['Montserrat']
      }
    },
  },
  plugins: [],
}

