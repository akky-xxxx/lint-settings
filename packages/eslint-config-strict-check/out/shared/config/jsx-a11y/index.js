"use strict";
const const_1 = require("../../const");
const collectiveSetting_1 = require("../../utils/collectiveSetting");
const anchorIsValid_1 = require("./options/anchorIsValid");
const labelHasAssociatedControl_1 = require("./options/labelHasAssociatedControl");
module.exports = {
    rules: {
        "jsx-a11y/anchor-is-valid": anchorIsValid_1.anchorIsValid,
        "jsx-a11y/label-has-associated-control": labelHasAssociatedControl_1.labelHasAssociatedControl,
    },
    overrides: [
        {
            files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}"],
            rules: (0, collectiveSetting_1.collectiveSetting)(["jsx-a11y/anchor-is-valid"], const_1.Off),
        },
    ],
};
//# sourceMappingURL=index.js.map