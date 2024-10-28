/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderWidth: {
        '16': '16px',  // Add a 16px border width option
        '20': '20px',  // Add a 20px border width option
        '24': '24px',  // Add a 24px border width option
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      gridTemplateColumns: {
        'custom': '3fr 5fr',
      },
    },
  },
  plugins: [],
}

