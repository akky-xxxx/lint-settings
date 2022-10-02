"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRules = void 0;
const getRules = (current, master) => {
    const [ruleName, ruleFunction] = master;
    return {
        ...current,
        [ruleName]: ruleFunction,
    };
};
exports.getRules = getRules;
//# sourceMappingURL=index.js.map