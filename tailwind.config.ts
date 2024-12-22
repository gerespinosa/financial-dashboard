import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c2475", //Blue-violet
        secondary: "#A972F5" //Purple
      },
      fontSize:{
        title: '32px'
      }
    },
  },
  plugins: [],
} satisfies Config;
