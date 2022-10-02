"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.literal = void 0;
const literal = (context) => (node) => {
    const { value } = node;
    const { options, report } = context;
    if (!options.length) {
        report({
            messageId: "NoOption",
            node,
        });
        return;
    }
    const [{ forbiddenValues }] = options;
    if (!forbiddenValues.includes(String(value)))
        return;
    report({
        message: `don't hard code "${String(value)}", replace to designated constant or function`,
        node,
    });
};
exports.literal = literal;
//# sourceMappingURL=index.js.map