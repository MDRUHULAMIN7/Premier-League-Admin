/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: '#FEFEFE',
        primary: '#FEFEFE', 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.noscrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.noscrollbar': {
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none',   
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
