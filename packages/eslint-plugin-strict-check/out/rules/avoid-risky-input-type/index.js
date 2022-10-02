"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avoidRiskyInputType = void 0;
const jsxOpeningElement_1 = require("./modules/jsxOpeningElement");
exports.avoidRiskyInputType = {
    create: (context) => {
        const jsxOpeningElementMain = (0, jsxOpeningElement_1.jsxOpeningElement)(context);
        return {
            JSXOpeningElement: jsxOpeningElementMain,
        };
    },
    defaultOptions: [],
    meta: {
        messages: {
            NoOption: "not specified option",
        },
        schema: {},
        type: "suggestion",
    },
};
//# sourceMappingURL=index.js.map