"use strict";
const const_1 = require("../../const");
const preventAbbreviations_1 = require("./options/preventAbbreviations");
module.exports = {
    rules: {
        "unicorn/explicit-length-check": const_1.Off,
        "unicorn/filename-case": const_1.Off,
        "unicorn/new-for-builtins": const_1.Off,
        "unicorn/no-array-callback-reference": const_1.Off,
        "unicorn/no-array-for-each": const_1.Off,
        "unicorn/no-array-reduce": const_1.Off,
        "unicorn/no-lonely-if": const_1.Off,
        "unicorn/no-new-array": const_1.Off,
        "unicorn/no-null": const_1.Off,
        "unicorn/no-useless-undefined": const_1.Off,
        "unicorn/prefer-module": const_1.Off,
        "unicorn/prefer-node-protocol": const_1.Off,
        "unicorn/prefer-number-properties": const_1.Off,
        "unicorn/prevent-abbreviations": preventAbbreviations_1.preventAbbreviations,
    },
};
//# sourceMappingURL=index.js.map