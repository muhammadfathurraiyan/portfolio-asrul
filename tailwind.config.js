/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    parallax: {
      0: "translateZ(-300px) scale(4)",
      1: "translateZ(-250px) scale(3.5)",
      2: "translateZ(-200px) scale(3)",
      3: "translateZ(-150px) scale(2.5)",
      4: "translateZ(-100px) scale(2)",
      5: "translateZ(-50px) scale(1.5)",
      6: "translateZ(0px) scale(1)",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          parallax: (value) => ({
            transform: value,
          }),
        },
        { values: theme("parallax") }
      );
    }),
  ],
};
