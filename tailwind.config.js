/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-faded-blue": "#00A9FF",
        "color-primary-light": "#89CFF3",
        "color-primary-dark": "#A0E9FF",
        "color-deepest-blue": "#00A9FF",
        "color-light-blue": "#CDF5FD",
        

      }
    },
    container: {
      center: true,
      padding: {
        default: "1.2500em",
        md: "3.125em"
      }
    }
  },
  plugins: [],
}

