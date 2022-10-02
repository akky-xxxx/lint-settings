"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionDeclaration = void 0;
const getMessage_1 = require("../getMessage");
const functionDeclaration = (context) => (node) => {
    const { options, report } = context;
    if (!options.length) {
        report({
            messageId: "NoOption",
            node,
        });
        return;
    }
    const { forbiddenPrefix } = options[0];
    if (!node.id?.name.startsWith(forbiddenPrefix))
        return;
    report({
        message: (0, getMessage_1.getMessage)(forbiddenPrefix),
        node,
    });
};
exports.functionDeclaration = functionDeclaration;
//# sourceMappingURL=index.js.map