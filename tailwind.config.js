/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm1' : {'max':  '600px'}
      },
    },
  },
  plugins: [],
}

