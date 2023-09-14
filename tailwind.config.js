/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
				center: true,
				screens: {
					sm: '100%',
					md: '100%',
					lg: '1134px', 
					xl: '1280px',
				},
      },
      backgroundImage: {
				'custom-bg': 'linear-gradient(180deg, #90658B 0%, #E4979E 100%)',
			},
      fontFamily: {
				firago: ['FiraGO', 'sans-serif'],
			},
      backgroundColor: {
				'banner-bg-blue': '#178ADB',
				'banner-bg-yellow': '#D0F0C0',
			},
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
