/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#313477',
        primaryBrown: '#964b34',
        primaryGreen: '#006a44',
      },
    },
  },
  plugins: [],
};
