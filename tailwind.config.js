/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px",
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        titleFont:"Roboto",
        bodyFont:"Poppins",
      },
      colors:{
        amazon_blue:"#131921",
        amazon_light:"#232f3e",
        amazon_yellow:"#febd69",
        whitetext:"#ffffff",
        lighttext:"#ccc",
        quantity_box:"#ofof2f2",
        footerbottom:"#131a22",

      },
      boxShadow:{
        testshadow:"0px 0px 32px 1 px rgba(199 199 199 1)",
        amazoninput:"0 0 3px 2px rgb(228 121 17 / 50%",
        


      }
    },
  },
  plugins: [],
}

