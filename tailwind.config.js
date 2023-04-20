/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {   
      },
      colors:{
        slate:{
          100: "#F1F5F9",
          200: "E2E8F0",
          300: "CBD5E1",

        },
      },
    },
  },
  plugins: [],
}
