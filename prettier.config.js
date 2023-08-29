/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 175,
  trailingComma: 'all',
  semi: false,
  singleQuote: true,
  plugins: [
    'prettier-plugin-go-template',
    'prettier-plugin-tailwindcss'
  ],
}
