"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventHandlerPrefix = void 0;
const functionDeclaration_1 = require("./modules/functionDeclaration");
const variableDeclarator_1 = require("./modules/variableDeclarator");
exports.eventHandlerPrefix = {
    create: (context) => {
        const functionDeclarationMain = (0, functionDeclaration_1.functionDeclaration)(context);
        const variableDeclaratorMain = (0, variableDeclarator_1.variableDeclarator)(context);
        return {
            FunctionDeclaration: functionDeclarationMain,
            VariableDeclarator: variableDeclaratorMain,
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