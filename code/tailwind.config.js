/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "425px",
      },
      colors: {
        primary: "hsl(25, 97%, 53%)",
        neutral: {
          white: "white",
          grey: {
            200: "hsl(217, 12%, 63%)",
            500: "hsl(216, 12%, 54%)",
          },
          darkBlue: {
            endGradient: "#181e25",
            400: "hsl(213, 19%, 18%)",
            900: "hsl(216, 12%, 8%)",
          },
        },
      },
    },
  },
  plugins: [],
};
