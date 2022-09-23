"use strict";
const const_1 = require("../../const");
const collectiveSetting_1 = require("../../utils/collectiveSetting");
const extensions_1 = require("./options/extensions");
const order_1 = require("./options/order");
module.exports = {
    rules: {
        "import/extensions": extensions_1.extensions,
        "import/no-default-export": const_1.Error,
        "import/order": order_1.order,
        "import/prefer-default-export": const_1.Off,
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
            rules: (0, collectiveSetting_1.collectiveSetting)(["import/no-extraneous-dependencies"], const_1.Off),
        },
        {
            files: ["**/pages/**/*.{api,page}.{tsx,ts}", "**/*.stories.{ts,tsx}"],
            rules: (0, collectiveSetting_1.collectiveSetting)(["import/no-default-export"], const_1.Off),
        },
    ],
};
//# sourceMappingURL=index.js.map