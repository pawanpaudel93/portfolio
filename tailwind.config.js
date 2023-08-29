/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#4ceb95",
      },
      backgroundImage: {
        main: "url(/img/bg.jpg)",
      },
    },
  },
  plugins: [],
};
