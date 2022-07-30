/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#1A1B21",
        "tan": "#F3BF99",
        "off-white": '#F5F5F5',
        "linkedin": '#5093E2',
        "off-gray": '#DCDCDC',
        "footer": '#161619'
      }
    },
  },
  plugins: [],
}
