/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'theme-gray': '#ebecec',
        'theme-gray-light': '#f7f9f9',
        'theme-gray-border': '#eff3f4',
        'theme-blue': '#1d9bf0',
        'theme-blue-darker': '#1a8bd8'
      },
    },
  },
  plugins: [],
}

