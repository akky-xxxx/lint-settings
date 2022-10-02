"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigRules = void 0;
const const_1 = require("../../shared/const");
const getConfigRules = (current, master) => {
    const [ruleName, , options] = master;
    return {
        ...current,
        [`${const_1.Prefix}/${ruleName}`]: options,
    };
};
exports.getConfigRules = getConfigRules;
//# sourceMappingURL=index.js.map