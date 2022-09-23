import { Off } from "../../const"
import { collectiveSetting } from "../../utils/collectiveSetting"

export = {
  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}", "**/spec/**"],
      rules: collectiveSetting(
        ["sonarjs/no-duplicate-string", "sonarjs/cognitive-complexity"],
        Off,
      ),
    },
  ],
}
