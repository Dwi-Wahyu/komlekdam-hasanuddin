/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "450px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
      colors: {
        "font-1": "#101828",
        "font-2": "#595F74",
        "font-3": "#99A4AE",
        "font-white": "#FFFFFF",

        "element-grey": "#F3F6F9",
        "element-white": "#FFFFFF",
        "line-border": "#E2E7EB",
        "soft-blue": "#0C7BEE",
        background: "#E7F2FD",
        "background-2": "#EFFEF0",
        "background-3": "#F0F7FB",
        icon: "#8DA0B4",

        blue: "#1761D0",
        "dark-blue": "#0B387C",
        orange: "#F87D46",
        green: "#03CEA4",
        primary: "#f1c40f",
        second: "#1C2940",
        danger: "#c0392b",
        yellow: "#FFD32A",
      },
    },
  },
  plugins: [],
};
