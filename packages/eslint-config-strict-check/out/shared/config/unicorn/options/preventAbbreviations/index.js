"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preventAbbreviations = void 0;
const const_1 = require("../../../../const");
exports.preventAbbreviations = [
    const_1.Error,
    {
        replacements: Object.fromEntries([
            // 許容する略称一覧
            "props",
            "req",
            "res",
            "ref",
            "env",
        ].map((keyword) => [keyword, false])),
    },
];
//# sourceMappingURL=index.js.map