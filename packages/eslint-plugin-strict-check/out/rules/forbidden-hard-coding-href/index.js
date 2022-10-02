"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forbiddenHardCodingHref = void 0;
const literal_1 = require("./modules/literal");
exports.forbiddenHardCodingHref = {
    create: (context) => {
        const literalMain = (0, literal_1.literal)(context);
        return {
            Literal: literalMain,
        };
    },
    defaultOptions: [],
    meta: {
        messages: {
            NoOption: "not specified option",
        },
        schema: {},
        type: "problem",
    },
};
//# sourceMappingURL=index.js.map