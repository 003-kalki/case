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
      'contact-gray': '#E9E9E9',
      'button-gray': '#F1F1F3',
      },
      margin: {
        '33rem': '33rem',
        '17rem': '17rem',
        '14rem': '14rem',
      },
      fontSize: {
        '2.2rem': '2.2rem',
      },
      width: {
        '100%': '100%',
        '0.5px': '0.5px',
        '395px': '395px',
      },
      height: {
        '422px': '422px',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
