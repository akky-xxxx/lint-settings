"use strict";
const const_1 = require("../../const");
const collectiveSetting_1 = require("../../utils/collectiveSetting");
module.exports = {
    overrides: [
        {
            files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}", "**/spec/**"],
            rules: (0, collectiveSetting_1.collectiveSetting)(["sonarjs/no-duplicate-string", "sonarjs/cognitive-complexity"], const_1.Off),
        },
    ],
};
//# sourceMappingURL=index.js.map