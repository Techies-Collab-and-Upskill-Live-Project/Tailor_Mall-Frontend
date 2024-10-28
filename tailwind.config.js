/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#535353",
        primary: {
          10: "#E6F2F2",
          50: "#b0d8d8",
          100: "#008080",
          200: "#004646",
        },
        foundationGrey: { 50: "#d3d3d3", 100: "#bcbcbc" },
        primaryGreen: { 50: "#E6F2F2", 100: "#B0D8D8"},
        success: {50: "#E6FBEE"}
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
