"use strict";
const const_1 = require("../../const");
const collectiveSetting_1 = require("../../utils/collectiveSetting");
const arrayType_1 = require("./options/arrayType");
const consistentTypeAssertions_1 = require("./options/consistentTypeAssertions");
const consistentTypeImports_1 = require("./options/consistentTypeImports");
const noConfusingVoidExpression_1 = require("./options/noConfusingVoidExpression");
const noImplicitAnyCatch_1 = require("./options/noImplicitAnyCatch");
const noUnnecessaryBooleanLiteralCompare_1 = require("./options/noUnnecessaryBooleanLiteralCompare");
const noUnnecessaryCondition_1 = require("./options/noUnnecessaryCondition");
const sortTypeUnionIntersectionMembers_1 = require("./options/sortTypeUnionIntersectionMembers");
module.exports = {
    parser: "@typescript-eslint/parser",
    rules: {
        "@typescript-eslint/array-type": arrayType_1.arrayType,
        "@typescript-eslint/consistent-indexed-object-style": [const_1.Error, "record"],
        "@typescript-eslint/consistent-type-assertions": consistentTypeAssertions_1.consistentTypeAssertions,
        "@typescript-eslint/consistent-type-definitions": [const_1.Error, "type"],
        "@typescript-eslint/consistent-type-imports": consistentTypeImports_1.consistentTypeImports,
        "@typescript-eslint/explicit-module-boundary-types": const_1.Off,
        "@typescript-eslint/no-confusing-void-expression": noConfusingVoidExpression_1.noConfusingVoidExpression,
        "@typescript-eslint/no-implicit-any-catch": noImplicitAnyCatch_1.noImplicitAnyCatch,
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": noUnnecessaryBooleanLiteralCompare_1.noUnnecessaryBooleanLiteralCompare,
        "@typescript-eslint/no-unnecessary-condition": noUnnecessaryCondition_1.noUnnecessaryCondition,
        "@typescript-eslint/no-unnecessary-type-arguments": const_1.Warn,
        "@typescript-eslint/prefer-string-starts-ends-with": const_1.Warn,
        "@typescript-eslint/sort-type-union-intersection-members": sortTypeUnionIntersectionMembers_1.sortTypeUnionIntersectionMembers,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".ts"],
            },
        },
    },
    overrides: [
        {
            files: ["**/*.test.{ts,tsx}"],
            rules: (0, collectiveSetting_1.collectiveSetting)([
                "@typescript-eslint/no-unsafe-call",
                "@typescript-eslint/no-unsafe-member-access",
            ], const_1.Off),
        },
    ],
};
//# sourceMappingURL=index.js.map