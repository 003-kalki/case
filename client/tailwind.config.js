/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}", // Existing content paths
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}", // Add Flowbite React content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
