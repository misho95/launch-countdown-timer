/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#46485B",
        purple2: "#1D1E28",
        purple3: "#343650",
        purple4: "#191A23",
        purpleLight: "#8385A9",
        pink: "#FB5E84",
      },
      width: {
        w148: "148px",
        w70: "70px",
      },
      height: {
        h197: "197px",
        h168: "168px",
        h132: "132px",
        h70: "70px",
      },
    },
  },
  plugins: [],
};
