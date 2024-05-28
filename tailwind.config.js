/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          from: { transform: 'rotateX(0deg)' },
          to: { transform: 'rotateX(180deg)' }
        }
      },
      animation: {
        flip: 'flip 0.9s ease-in-out forwards'
      }
    },
    screens: {
      sm: '768px',
      md: '1200px',
      lg: '1440px',
      xl:'1919px'
    },
  },
  plugins: [],
}

