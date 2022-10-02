"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
const getErrorMessage = (moduleName, propertyName) => `import "${moduleName}.${propertyName}" as individually. example: import { ${propertyName} } from "${moduleName.toLowerCase()}"`;
exports.getErrorMessage = getErrorMessage;
//# sourceMappingURL=index.js.map