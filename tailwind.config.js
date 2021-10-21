module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  important: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};
