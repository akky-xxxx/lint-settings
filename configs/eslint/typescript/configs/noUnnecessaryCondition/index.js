const { ERROR } = require("../../../const")
exports.noUnnecessaryCondition = [
  ERROR,
  {
    allowConstantLoopConditions: false,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
  },
]
