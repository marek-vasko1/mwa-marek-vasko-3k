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
      '52px': '32px',
      '32px': '32px',
      '48px': '48px',
      '80px': '80px',
    },
    /*borderWidth:{
      '3px': '3px'
    }*/

  },
  plugins: [],

}
