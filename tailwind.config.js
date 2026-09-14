/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg,#ff8a00,#ff3d7f,#7b2fff)"
      }
    },
  },
  plugins: [],
};
