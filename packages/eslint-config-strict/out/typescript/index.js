"use strict";
module.exports = {
    plugins: [
        "@typescript-eslint",
        "jest",
        "sonarjs",
        "storybook",
        "tsdoc",
        "unicorn",
    ],
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:unicorn/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:sonarjs/recommended",
        "airbnb",
        "../shared/config/import",
        "../shared/config/jest",
        "../shared/config/tsdoc",
        "../shared/config/jsx-a11y",
        "../shared/config/unicorn",
        "../shared/config/sonarjs",
        "../shared/config/javascript",
        "../shared/config/typescript",
    ],
};
//# sourceMappingURL=index.js.map