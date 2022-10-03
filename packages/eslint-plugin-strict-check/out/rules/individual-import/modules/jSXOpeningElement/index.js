"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsxOpeningElement = void 0;
const getErrorMessage_1 = require("../getErrorMessage");
const hasTarget_1 = require("../hasTarget");
const jsxOpeningElement = (context) => (node) => {
    const { options, report } = context;
    if (!options.length) {
        report({
            messageId: "NoOption",
            node,
        });
        return;
    }
    if (node.name.type !== "JSXMemberExpression" ||
        node.name.object.type !== "JSXIdentifier") {
        return;
    }
    const { name: { object: { name: moduleName }, property: { name: propertyName }, }, } = node;
    const [{ targets }] = options;
    if (!(0, hasTarget_1.hasTarget)(targets, moduleName))
        return;
    report({
        message: (0, getErrorMessage_1.getErrorMessage)(moduleName, propertyName),
        node,
    });
};
exports.jsxOpeningElement = jsxOpeningElement;
//# sourceMappingURL=index.js.map