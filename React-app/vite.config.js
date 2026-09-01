import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], 
})


// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         logo: ['"Plus Jakarta Sans"', 'sans-serif'], // Replace with your chosen font
//       },
//     },
//   },
// }
