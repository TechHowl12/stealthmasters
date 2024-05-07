/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '768px',
      md: '976px',
      lg: '1440px',
    },
  },
  plugins: [],
}

