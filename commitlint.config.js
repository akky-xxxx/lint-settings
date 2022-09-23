const { scopes } = require("./configs/commitlint/scopes")

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "feat", "fix", "docs", "style", "refactor", "test", "revert"],
    ],
    "scope-enum": [2, "always", scopes],
    "scope-empty": [2, "never"],
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [0, "always"],
  },
}
