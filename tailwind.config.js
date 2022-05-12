module.exports = {
  mode: 'jit',
  pirge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primary': "#4FB2F8",
      'white': "#FFFFFF",
      'secondary': "#333333",
      'orange': '#ff4206',
      'grey': "#EFEFEF",
      'grey-light': '#F1F1F1',
      "grey-text": "#C4C4C4",
      'catalog-shadow': "rgba(0, 0, 0, 0.25)",
      'catalog-shadow-hover': "rgba(0, 0, 0, 0.25)",
    },
    extend: {
      dropShadow: {
        // drop-shadow-card
        'card': "0px 0px 40px rgba(0, 0, 0, 0.25)",
        'text': "0px 0px 10px rgba(0, 0, 0, 0.25)",
        'slider': "4px 4px 5px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        'card': '0px 0px 2px rgba(0, 0, 0, 0.25)',
        'card-hover': '0px 0px 40px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0px 0px 4px rgba(0, 0, 0, 0.15)',
        'product-color': 'inset 0px 0px 6px rgba(0, 0, 0, 0.25)',
        'divider': 'inset 0px 0px 0.5px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
