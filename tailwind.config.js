/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'sans': ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        'cyan': 'hsl(var(--cyan))',
        'dkblue': 'hsl(var(--dkBlue))',
        'dkgrayishblue': 'hsl(var(--dkGrayishBlue))',
        'grayishblue': 'hsl(var(--grayishBlue))',
        'neongreen': 'hsl(var(--neonGreen))'
      },
      boxShadow: {
        'neongreen': '0 0 20px 0 hsl(var(--neonGreen))'
      }
    },
  },
  plugins: [],
}
