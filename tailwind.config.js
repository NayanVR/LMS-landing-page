/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003874',
        'secondary': '#3D93F0',
        'tertiary': '#ED1C24',
      },
    },
    plugins: [],
  }
}
