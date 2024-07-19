/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-primary': 'var(--clr-primary)',
        'clr-red': 'var(--clr-red)',
      },
    },
  },
  plugins: [],
};
