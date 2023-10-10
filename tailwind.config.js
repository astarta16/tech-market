/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "984px",
          xl: "1134px",
        },
      },
      backgroundImage: {
        "custom-bg": "linear-gradient(180deg, #90658B 0%, #E4979E 100%)",
        "great-deals": "linear-gradient(180deg, #391536 0%, #9D6396 100%)",
        "aurora-headset":
          "linear-gradient(280deg, #DDB5BD 1.01%, #F2DBDD 90.82%)",
        "new-dual": "linear-gradient(90deg, #1689DA 0%, #44B1F2 100%)",
        "instant-cameras": "linear-gradient(90deg, #EFB53A 0%, #E3C234 100%)",
      },
      fontFamily: {
        firago: ["FiraGO", "sans-serif"],
      },
      backgroundColor: {
        "banner-bg-blue": "#178ADB",
        "banner-bg-yellow": "#D0F0C0",
        "speacial-bg-gray": "#EAEAEA",
      },
      colors: {
        addButtonColor: "#D0F0C0",
        logInButtonColor: "#EAEAEA",
        badgeColor: "#CD2727",
        badgeText: "#F8F8F8",
        special_offers: "#000",
        viewDetailsButtonColor: "#FFF",
        buyNowButtonColor: "#178ADB",
      },
      height: {
        8.5: "2.125rem",
      },
      screens: {
        sm: { max: "320px" },
      },
    },
  },
  plugins: [],
};
