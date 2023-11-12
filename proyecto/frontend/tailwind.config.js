/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      colors:{
        'wwe': '#AA000B'
      }
    },
  },
  plugins: [
          require("daisyui"),
          require('@tailwindcss/aspect-ratio')
           
        ],
}

