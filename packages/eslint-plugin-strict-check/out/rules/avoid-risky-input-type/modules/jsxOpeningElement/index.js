"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsxOpeningElement = void 0;
// eslint-disable-next-line max-statements, complexity
const jsxOpeningElement = (context) => (node) => {
    const { options, report } = context;
    if (!options.length) {
        report({
            messageId: "NoOption",
            node,
        });
        return;
    }
    const targetAttribute = node.attributes.find((attribute) => {
        if (attribute.type !== "JSXAttribute")
            return false;
        return attribute.name.name === "type";
    });
    if (!targetAttribute || targetAttribute.type !== "JSXAttribute")
        return;
    const { value: parentValue } = targetAttribute;
    if (!parentValue ||
        parentValue.type !== "Literal" ||
        typeof parentValue.value !== "string") {
        return;
    }
    const { value } = parentValue;
    if (!options[0].riskyValues.includes(value))
        return;
    report({
        message: `<input type="${value}" /> is risky. please rethink other type value`,
        node,
    });
};
exports.jsxOpeningElement = jsxOpeningElement;
//# sourceMappingURL=index.js.map