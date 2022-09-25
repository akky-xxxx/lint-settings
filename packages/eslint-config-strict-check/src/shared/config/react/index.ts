import { Error, Off } from "../../const"
import { collectiveSetting } from "../../utils/collectiveSetting"
import { functionComponentDefinition } from "./options/functionComponentDefinition"

export = {
  rules: {
    "react/function-component-definition": functionComponentDefinition,
    "react/jsx-filename-extension": [Error, { extensions: [".ts", ".tsx"] }],
    "react/jsx-fragments": [Error, "element"],

    // prerequisites for using typescript
    "react/jsx-props-no-spreading": Off,
    "react/prop-types": Off,
    "react/require-default-props": Off,

    // prerequisites for using react 17 over
    "react/react-in-jsx-scope": Off,
  },

  overrides: [
    {
      files: ["**/*.tsx"],
      rules: collectiveSetting(["no-use-before-define"], Off),
    },
  ],
}
