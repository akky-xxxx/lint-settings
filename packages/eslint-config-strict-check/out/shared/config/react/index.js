"use strict";
const const_1 = require("../../const");
const collectiveSetting_1 = require("../../utils/collectiveSetting");
const functionComponentDefinition_1 = require("./options/functionComponentDefinition");
const jsxNoLeakedRender_1 = require("./options/jsxNoLeakedRender");
const jsxSortProps_1 = require("./options/jsxSortProps");
module.exports = {
    rules: {
        "react/boolean-prop-naming": const_1.Error,
        "react/function-component-definition": functionComponentDefinition_1.functionComponentDefinition,
        "react/iframe-missing-sandbox": const_1.Error,
        "react/jsx-filename-extension": [const_1.Error, { extensions: [".ts", ".tsx"] }],
        "react/jsx-fragments": [const_1.Error, "element"],
        "react/jsx-no-leaked-render": jsxNoLeakedRender_1.jsxNoLeakedRender,
        "react/jsx-sort-props": jsxSortProps_1.jsxSortProps,
        // prerequisites for using typescript
        "react/jsx-props-no-spreading": const_1.Off,
        "react/prop-types": const_1.Off,
        "react/require-default-props": const_1.Off,
        // prerequisites for using react 17 over
        "react/react-in-jsx-scope": const_1.Off,
    },
    overrides: [
        {
            files: ["**/*.tsx"],
            rules: (0, collectiveSetting_1.collectiveSetting)(["no-use-before-define"], const_1.Off),
        },
    ],
};
//# sourceMappingURL=index.js.map