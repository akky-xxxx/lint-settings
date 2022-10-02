"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
const const_1 = require("../../shared/const");
const getConfigRules_1 = require("../getConfigRules");
const getConfig = (master) => ({
    plugins: [const_1.Prefix],
    rules: master.reduce(getConfigRules_1.getConfigRules, {}),
});
exports.getConfig = getConfig;
//# sourceMappingURL=index.js.map