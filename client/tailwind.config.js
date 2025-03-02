/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
        oswald: ["Oswald", "sans-serif"],
        bebas : ["Bebas Neue", "serif"],
        playfair: ["Playfair Display", "serif"]
      },
      colors: {
        navyblue: '#001433',
        khaki: '#64ED80'
      },
      animation: {
        scroll: "scroll 10s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

    },
  },
  plugins: [],
}