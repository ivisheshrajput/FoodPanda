/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "finger-paint": ["Finger Paint", "cursive"],
      },
    },
  },
  plugins: [],
};
