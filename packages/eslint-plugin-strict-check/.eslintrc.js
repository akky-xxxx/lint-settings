module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },

  plugins: ["@typescript-eslint", "jest", "tsdoc", "unicorn"],

  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "airbnb",
    "../../configs/eslint/import",
    "../../configs/eslint/jest",
    "../../configs/eslint/tsdoc",
    "../../configs/eslint/unicorn",
    "../../configs/eslint/javascript",
    "../../configs/eslint/typescript",
  ],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/out/**"],
  reportUnusedDisableDirectives: true,
}
