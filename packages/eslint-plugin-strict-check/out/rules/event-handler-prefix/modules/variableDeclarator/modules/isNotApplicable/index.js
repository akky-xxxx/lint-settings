"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotApplicable = void 0;
const isNotApplicable = (forbiddenPrefix) => (node) => node.init === null ||
    node.init.type !== "ArrowFunctionExpression" ||
    node.id.type !== "Identifier" ||
    !node.id.name.startsWith(forbiddenPrefix);
exports.isNotApplicable = isNotApplicable;
//# sourceMappingURL=index.js.map