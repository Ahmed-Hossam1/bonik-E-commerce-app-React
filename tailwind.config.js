/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0f3460",
        red: "#e94560",
        green: "#26e07f",
      },
    },
  },
  plugins: [require("daisyui")],
};
