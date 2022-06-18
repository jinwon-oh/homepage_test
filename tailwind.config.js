// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Noto Sans KR", "Montserrat", ...defaultTheme.fontFamily]
        notoSansKR: ["Noto Sans KR", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        // nanumbarungothic: ["Nanum Barun Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
