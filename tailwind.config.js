/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange : "#FF7A00",
      },
      fontFamily:{
        'sans' : ["'Sansation', sans-serif"],
        'poppin': ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
}