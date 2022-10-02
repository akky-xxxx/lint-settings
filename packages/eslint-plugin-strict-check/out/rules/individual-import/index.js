"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.individualImport = void 0;
const callExpression_1 = require("./modules/callExpression");
const identifier_1 = require("./modules/identifier");
const jSXOpeningElement_1 = require("./modules/jSXOpeningElement");
exports.individualImport = {
    create: (context) => {
        const callExpressionMain = (0, callExpression_1.callExpression)(context);
        const identifierMain = (0, identifier_1.identifier)(context);
        const jsxOpeningElementMain = (0, jSXOpeningElement_1.jsxOpeningElement)(context);
        return {
            CallExpression: callExpressionMain,
            Identifier: identifierMain,
            JSXOpeningElement: jsxOpeningElementMain,
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