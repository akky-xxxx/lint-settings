const { WARN } = require("../../../const")
exports.noUnnecessaryBooleanLiteralCompare = [
  WARN,
  {
    allowComparingNullableBooleansToTrue: false,
    allowComparingNullableBooleansToFalse: false,
  },
]
