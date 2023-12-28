// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'text': '#0a012d',
        'background': '#ebe6fe',
        'primary': '#647c04',
        'secondary': '#af9cfc',
        'accent': '#a0c606',
      },
    },
  },
  plugins: [],
};
