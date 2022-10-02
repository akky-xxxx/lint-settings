"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identifier = void 0;
const getErrorMessage_1 = require("../getErrorMessage");
const identifier = (context) => (node) => {
    const { options, report } = context;
    if (!options.length) {
        report({
            messageId: "NoOption",
            node,
        });
        return;
    }
    if (node.parent?.type !== "TSQualifiedName")
        return;
    const hasTarget = options[0].targets
        .map((target) => target.toLowerCase())
        .includes(node.name.toLowerCase());
    const { parent: { right: { name: propertyName }, }, } = node;
    const { name: moduleName } = node;
    if (!hasTarget || !propertyName)
        return;
    report({
        message: (0, getErrorMessage_1.getErrorMessage)(moduleName, propertyName),
        node,
    });
};
exports.identifier = identifier;
//# sourceMappingURL=index.js.map