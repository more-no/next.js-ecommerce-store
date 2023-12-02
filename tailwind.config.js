/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  extend: {},
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: ['pastel'],
    base: true,
    styled: true,
    utils: true,
  },
};
