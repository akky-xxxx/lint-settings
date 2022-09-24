const { OFF, ERROR } = require("../const")
const { extensions } = require("./configs/extensions")
const { order } = require("./configs/order")
const { collectiveSetting } = require("../utils/collectiveSetting")

module.exports = {
  rules: {
    "import/prefer-default-export": OFF,
    "import/no-default-export": ERROR,
    "import/order": order,
    "import/extensions": extensions,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}"],
      rules: collectiveSetting(["import/no-extraneous-dependencies"], OFF),
    },
    {
      files: ["**/pages/**/*.{api,page}.{tsx,ts}", "**/*.stories.{ts,tsx}"],
      rules: collectiveSetting(["mport/no-default-export"], OFF),
    },
  ],
}
