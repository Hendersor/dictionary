module.exports = {
  content: [
    "./src/components/*.{tsx,ts,jsx,js}",
    "./src/pages/*.{tsx,ts,jsx,js}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        searchBar: "#fbfbfb",
        fondoPlay: "#eacffc",
        iconoPlay: "#a645ef",
        iconoLupa: "#bd96d9",
        wordMeaning: "#757575",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
