module.exports = {
  purge: ["./public/*.html", "./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { min: "450px" },
      },
      colors: {
        primary: ["#083041", "#67A2CD", "#67A2CD"],
        secondary: ["#083041"],
        tertiary: ["#67A2CD"],
        whatsapp: "#25D366",
        facebook: "#4267B2",
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
