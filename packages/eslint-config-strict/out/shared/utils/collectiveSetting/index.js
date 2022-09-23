"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectiveSetting = void 0;
/**
 * @remarks
 * set each rule values with settingValue
 */
const collectiveSetting = (rules, settingValue) => Object.fromEntries(rules.map((rule) => [rule, settingValue]));
exports.collectiveSetting = collectiveSetting;
//# sourceMappingURL=index.js.map