/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        fadein: "fadein 5s",
        typing: "typing 2.5s steps(35, end)",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        typing: {
          from: { width: 0 },
          to: { width: "44%" },
        },
        blink: {
          from: { "border-color": "transparent" },
          to: { "border-color": "orange" },
        },
      },
    },
  },
  plugins: [],
};
