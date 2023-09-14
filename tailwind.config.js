/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        addButtonColor: "#D0F0C0",
        logInButtonColor: "#EAEAEA",
        badgeColor: "#CD2727",
        badgeText: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
