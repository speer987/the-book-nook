/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      title: ['"Onest"', "sans-serif"],
      body: ['"Onest"', "sans-serif"],
    },
    extend: {
      // colors: { 'dark': '#083344', //950
      //           'med': '#0891b2', //600
      //           'light': '#67e8f9' }, //300
    },
  },
  plugins: [],
};
