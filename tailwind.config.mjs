/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  theme: {
    extend: {

      fontSize: {
        'xxs': '0.65rem',  // Menambahkan ukuran font ekstra kecil
        'multixl': '10rem',  // Menambahkan ukuran font ekstra besar
        'huge': '4rem',    
      },

      fontFamily: {
        'Arial' : ['Arial'], 
        'Delicious' : ['Delicious'], 
        'Outfit' : ['Outfit'], 
        'Poppins' : ['Poppins'], 
      },
      colors: {
        
        'primary': '#0206FB', 
        'secondary': '#A7D918', 
        'accent': '#FFD058', 
        'custom-grey': '#D266A1', 
        'custom-bg-primary' : '#9A47C0',
        'custom-slate' : '#FFF5E0',
       
      },
      backgroundImage: {
        'accent': "url('/assets/bg.png')",
        'profile': "url('/assets/bgprofile.png')",
        'payment': "url('/assets/bgp.png')",
        'comunity': "url('/assets/bgcom.png')",
        'contour-patern' : "url('/assets/background/contour-patern.png')",
      }
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
