/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        khula: ['khula', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'],
      },
      colors: {
        'light-yellow': '#EC942A',
        'deep-yellow': '#E97917',
        'dark-gray': '#7D8086',
        'light-gradient': '#',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        heroBg: "url('assets/hero-before.png')",
        lineBg: "url('assets/line-img-3.png')",
        textGradient: 'linear-gradient(to right, white, #7D8086)',
        borderGradient: 'linear-gradient(to right, green, yellow, red)',
      },
    },
  },
  plugins: [],
};
