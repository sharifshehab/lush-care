/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primary-color)',
        secondaryColor: 'var(--secondary-color)',
        darkBg: '#0b0927',
      },
      backgroundImage: {
        'breadcrumb': "url('./src/assets/breadcrumb.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}