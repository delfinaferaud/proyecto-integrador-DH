/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBlack: '#010001',
        mainWhite: '#FFFEFE',
        mainYellow: '#FFCC12',
        darkGray: '#444444',
        lightGray: '#EEEEEE',
      },

      screens: {
        sm: '375px',
        md: '768px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
