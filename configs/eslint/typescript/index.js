const { OFF, ERROR, WARN } = require("../const")
const { arrayType } = require("./configs/arrayType")
const {
  consistentTypeAssertions,
} = require("./configs/consistentTypeAssertions")
const { consistentTypeImports } = require("./configs/consistentTypeImports")
const {
  noConfusingVoidExpression,
} = require("./configs/noConfusingVoidExpression")
const { no_implicit_any_catch } = require("./configs/no_implicit_any_catch")
const {
  noUnnecessaryBooleanLiteralCompare,
} = require("./configs/noUnnecessaryBooleanLiteralCompare")
const { noUnnecessaryCondition } = require("./configs/noUnnecessaryCondition")
const {
  sortTypeUnionIntersectionMembers,
} = require("./configs/sortTypeUnionIntersectionMembers")
import { collectiveSetting } from "../utils/collectiveSetting"

module.exports = {
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/array-type": arrayType,
    "@typescript-eslint/consistent-indexed-object-style": [ERROR, "record"],
    "@typescript-eslint/consistent-type-assertions": consistentTypeAssertions,
    "@typescript-eslint/consistent-type-definitions": [ERROR, "type"],
    "@typescript-eslint/consistent-type-imports": consistentTypeImports,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/no-confusing-void-expression":
      noConfusingVoidExpression,
    "@typescript-eslint/no-implicit-any-catch": no_implicit_any_catch,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare":
      noUnnecessaryBooleanLiteralCompare,
    "@typescript-eslint/no-unnecessary-condition": noUnnecessaryCondition,
    "@typescript-eslint/no-unnecessary-type-arguments": WARN,
    "@typescript-eslint/prefer-string-starts-ends-with": WARN,
    "@typescript-eslint/sort-type-union-intersection-members":
      sortTypeUnionIntersectionMembers,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.test.{ts,tsx}"],
      rules: collectiveSetting(
        [
          "@typescript-eslint/no-unsafe-call",
          "@typescript-eslint/no-unsafe-member-access",
        ],
        OFF,
      ),
    },
  ],
}