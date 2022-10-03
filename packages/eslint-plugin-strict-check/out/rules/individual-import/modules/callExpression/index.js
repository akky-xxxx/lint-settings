"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callExpression = void 0;
const getErrorMessage_1 = require("../getErrorMessage");
const hasTarget_1 = require("../hasTarget");
// eslint-disable-next-line complexity
const callExpression = (context) => (node) => {
    const { options, report } = context;
    if (!options.length) {
        report({
            messageId: "NoOption",
            node,
        });
        return;
    }
    if (node.callee.type !== "MemberExpression" ||
        node.callee.object.type !== "Identifier" ||
        node.callee.property.type !== "Identifier") {
        return;
    }
    const { callee: { object: { name: moduleName }, property: { name: propertyName }, }, } = node;
    if (!(0, hasTarget_1.hasTarget)(options[0].targets, moduleName))
        return;
    report({
        message: (0, getErrorMessage_1.getErrorMessage)(moduleName, propertyName),
        node,
    });
};
exports.callExpression = callExpression;
//# sourceMappingURL=index.js.map