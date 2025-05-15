/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['Proxima', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#1E40AF', // Add your custom blue color here
      },
    },
  },
  plugins: [],
}

