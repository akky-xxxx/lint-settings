"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasTarget = void 0;
const hasTarget = (targets, propertyName) => targets
    .map((target) => target.toLowerCase())
    .includes(propertyName.toLowerCase());
exports.hasTarget = hasTarget;
//# sourceMappingURL=index.js.map