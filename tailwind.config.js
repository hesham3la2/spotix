module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rakkas: ['Rakkas', 'sans-serif'],
        Vibes: ['Vibes', 'cursive'],
      },
      animation: {
        'scale-shadow': 'scale-shadow 0.5s ease 1 forwards',
      },
      keyframes: {
        'scale-shadow': {
          to: {
            transform: 'scale(1.08)',
            'box-shadow': '0 4px 18px rgb(34 34 34 / 15%)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
};
