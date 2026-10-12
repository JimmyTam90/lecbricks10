module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brick: "#E53E3E", ink: "#1A202C", plate: "#232b3b", edge: "#344056" },
      fontFamily: {
        display: ['"Arial Narrow"', '"Helvetica Neue"', "Impact", "system-ui", "sans-serif"],
        body: ["system-ui", "-apple-system", '"Segoe UI"', "Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
