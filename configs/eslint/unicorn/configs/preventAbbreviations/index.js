const { ERROR } = require("../../../const")
exports.preventAbbreviations = [
  ERROR,
  {
    replacements: Object.fromEntries(
      [
        // 許容する略称一覧
        "props",
        "req",
        "res",
        "ref",
        "env",
      ].map((keyword) => [keyword, false]),
    ),
  },
]
