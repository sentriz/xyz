/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.partial", "./**/*.tmpl"],
  theme: {
    fontFamily: {
      sans: ["Inconsolata", "monospace"],
      mono: ["Inconsolata", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
