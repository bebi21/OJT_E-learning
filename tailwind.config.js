/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#BC2228",
      },
      listStyleType: {
       
        square: 'square',
        roman: 'upper-roman',
      }
     
    },

  },
  variants: {
    extend: {
      // Thêm các variants bạn muốn tùy chỉnh cho thanh cuộn
      scrollbar: ['rounded']
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  plugins: [],
};
