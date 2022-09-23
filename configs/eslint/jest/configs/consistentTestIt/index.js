const { ERROR } = require("../../../const")

exports.consistentTestIt = [
  ERROR,
  {
    fn: "it",
    withinDescribe: "it",
  },
]
