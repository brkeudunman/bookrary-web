/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      screens: {
        mini: "420px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
