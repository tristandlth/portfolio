/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        'primary-dark': '#0A84FF',
      },
      borderRadius: {
        'apple': '1.25rem',
      },
    },
  },
  plugins: [],
}