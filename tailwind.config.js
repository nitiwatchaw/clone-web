/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#611f69",
        secondary: "#ecb22e",
        thirdary: "#f4ede4",
        primaryhover: "#4a154b",
        lightblue: "#206fae",
        darkblue: "#1264a3"
      },
      fontFamily: {
        arial: ['Arial',],
        sans: ['sans-serif'],
        Helvetica: ['Helvetica'],
        Avenir: ['Avenir'],
        Inter: ['Inter']
      },
      maxWidth: {
        modalWidth: "760px",
        figureWidth: "285px"
      },
      width: {
        widthFooter: "83.8537%",
        width35: "35%"
      },
      height: {
        figueHeight: "8.4rem",
        figueHeightM: "12rem",
        height74:"74px"
      },
      flexBasis: {
        footerflexBasic: "19%"
      },


      screens: {

        '2xl': { 'max': '1400px' },

        'xl': { 'max': '1355px' },

        'lg': { 'max': '1215px' },

        'md': { 'max': '1085px' },
        'nr': { 'max': '1020px' },
        'sm': { 'max': '768px' },
      }


    },
  },
  plugins: [],
}