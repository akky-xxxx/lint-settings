"use strict";
const master_1 = require("./const/master");
const reactMaster_1 = require("./const/reactMaster");
const getConfig_1 = require("./modules/getConfig");
const getRules_1 = require("./modules/getRules");
const rules = master_1.Master.reduce(getRules_1.getRules, {});
const react = (0, getConfig_1.getConfig)(reactMaster_1.ReactMaster);
module.exports = {
    configs: {
        react,
    },
    rules,
};
//# sourceMappingURL=index.js.map