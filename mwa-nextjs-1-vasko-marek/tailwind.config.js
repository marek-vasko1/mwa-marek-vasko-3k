module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        'logo': '48px',
      },
      fontFamily:{
        custom: "'Alfa Slab One', cursive",
      },
    },
    fontSize: {
      'logo': '40px',
      '16px': '16px',
      '72px': '72px',
      '52px': '52px',
    },
    /*borderWidth:{
      '3px': '3px'
    }*/

  },
  plugins: [],

}
