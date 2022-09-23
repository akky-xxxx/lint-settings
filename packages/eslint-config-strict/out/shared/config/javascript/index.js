"use strict";
const const_1 = require("../../const");
const collectiveSetting_1 = require("../../utils/collectiveSetting");
module.exports = {
    rules: {
        /* eslint-disable no-magic-numbers */
        complexity: [const_1.Error, 5],
        "implicit-arrow-linebreak": [const_1.Off],
        "max-depth": [const_1.Error, 3],
        "max-len": const_1.Off,
        "max-lines": [const_1.Error, { max: 100 }],
        "max-nested-callbacks": [const_1.Error, 3],
        "max-statements": [const_1.Error, 10],
        "multiline-comment-style": const_1.Off,
        "no-magic-numbers": const_1.Warn,
        "no-undefined": const_1.Warn,
        "no-unused-vars": const_1.Off,
        quotes: [const_1.Error, "double", { avoidEscape: true }],
        semi: [const_1.Error, "never"],
        "sort-keys": [const_1.Warn, "asc", { allowLineSeparatedGroups: true }],
        /* eslint-enable no-magic-numbers */
    },
    overrides: [
        {
            files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}", "**/spec/**"],
            rules: (0, collectiveSetting_1.collectiveSetting)([
                "complexity",
                "max-lines",
                "max-nested-callbacks",
                "max-statements",
                "no-console",
                "no-magic-numbers",
                "no-undefined",
                "sort-keys",
            ], const_1.Off),
        },
    ],
};
//# sourceMappingURL=index.js.map