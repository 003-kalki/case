/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}", // Existing content paths
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // Add Flowbite React content paths
  ],
  theme: {
    extend: {
      colors: {
      'them-color': '#001642',
      'text-gray': '#98A2B3',
      },
      margin: {
        '33rem': '33rem',
        '17rem': '17rem',
        '14rem': '14rem'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
