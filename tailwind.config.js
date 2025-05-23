module.exports = {
    content: ["./src/**/*.{html,js}", "./public/index.html"],
    theme: {
      extend: {
        keyframes: {
          slideWide: {
            '0%, 100%': { transform: 'translateX(0)' },
            '33%': { transform: 'translateX(-33.3333%)' },
            '66%': { transform: 'translateX(-66.6666%)' },
          },
        },
        animation: {
          'slide-wide': 'slideWide 12s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  