module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
      },
      backgroundImage: {
        site: "url('./assets/nebula.png')",
        about: "url('./assets/25Creatives.png')",
        skills: "url('./assets/about-me.png')",
      },
    },
  },
  plugins: [],
};
