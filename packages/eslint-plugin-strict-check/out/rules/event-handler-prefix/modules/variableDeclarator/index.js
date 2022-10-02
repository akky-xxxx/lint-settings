"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variableDeclarator = void 0;
const getMessage_1 = require("../getMessage");
const isNotApplicable_1 = require("./modules/isNotApplicable");
const variableDeclarator = (context) => (node) => {
    const { options, report } = context;
    if (!options.length) {
        report({
            messageId: "NoOption",
            node,
        });
        return;
    }
    const { forbiddenPrefix } = options[0];
    if ((0, isNotApplicable_1.isNotApplicable)(forbiddenPrefix)(node))
        return;
    report({
        message: (0, getMessage_1.getMessage)(forbiddenPrefix),
        node,
    });
};
exports.variableDeclarator = variableDeclarator;
//# sourceMappingURL=index.js.map