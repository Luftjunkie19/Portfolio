import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
  },
  themes: {
    mytheme: {
   primary: "#007dff",
          
 secondary: "#ce0000",
          
 accent: "#ce7d00",
          
 neutral: "#171e07",
          
base: "#132f3b",
          
info: "#00f3ff",
          
success: "#00b033",
          
 warning: "#e74400",
          
 error: "#ff3a5f",
}
  },

  plugins: [require('daisyui')],
};
export default config;
