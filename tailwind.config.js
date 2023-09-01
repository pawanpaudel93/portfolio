/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#4ceb95",
      },
      backgroundImage: {
        main: "url(/img/bg.jpg)",
      },
      keyframes: {
        slideUpEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },
        slideUpLeave: {
          "0%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
        },
      },
      animation: {
        slideUpEnter: "slideUpEnter .3s ease-in-out",
        slideUpLeave: "slideUpLeave .3s ease-in-out",
      },
    },
  },
  plugins: [],
};
