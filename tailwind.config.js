/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#f37221',
        'marrom': '#d6bda4',
        'azul': '#003366',
        'cinza': '#e0e0e0',
        'verde': '#3eb489',
      }
    },
  },
  plugins: [],
}

