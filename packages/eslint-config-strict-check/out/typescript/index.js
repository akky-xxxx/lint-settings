"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
module.exports = {
    plugins: ["@typescript-eslint", "jest", "storybook", "tsdoc", "unicorn"],
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:unicorn/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "airbnb",
        ...[
            "../shared/config/import",
            "../shared/config/jest",
            "../shared/config/tsdoc",
            "../shared/config/jsx-a11y",
            "../shared/config/unicorn",
            "../shared/config/javascript",
            "../shared/config/typescript",
        ].map((configPath) => path_1.default.resolve(__dirname, configPath)),
    ],
};
//# sourceMappingURL=index.js.map