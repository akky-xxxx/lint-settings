"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const const_1 = require("../../../../const");
exports.order = [
    const_1.Error,
    {
        "newlines-between": "always",
        alphabetize: { order: "asc" },
        groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
        ],
    },
];
//# sourceMappingURL=index.js.map