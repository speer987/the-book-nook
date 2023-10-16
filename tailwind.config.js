/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      title: ['"Onest"', "sans-serif"],
      body: ['"Onest"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home": "url('/src/images/books.jpg')",
      },
    },
  },
  plugins: [],
}
