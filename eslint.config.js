const babelParser = require("@babel/eslint-parser")
const prettier = require("eslint-config-prettier")

module.exports = [
  { ignores: ["node_modules/", "dist/", "documentation/", "playground/"] },
  prettier,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: { requireConfigFile: false, sourceType: "module" },
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "never"],
    },
  },
]
