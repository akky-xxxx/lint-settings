"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = void 0;
const messageBase = "of handler prefix";
const getMessage = (forbiddenPrefix) => {
    const correctPrefix = forbiddenPrefix === "on" ? "handle" : "on";
    return `replace "${forbiddenPrefix}" to "${correctPrefix}" ${messageBase}`;
};
exports.getMessage = getMessage;
//# sourceMappingURL=index.js.map