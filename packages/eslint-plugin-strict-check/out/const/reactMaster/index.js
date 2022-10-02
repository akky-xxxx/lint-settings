"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactMaster = void 0;
const avoid_risky_input_type_1 = require("../../rules/avoid-risky-input-type");
const event_handler_prefix_1 = require("../../rules/event-handler-prefix");
const individual_import_1 = require("../../rules/individual-import");
const const_1 = require("../../shared/const");
exports.ReactMaster = [
    [
        "event-handler-prefix",
        event_handler_prefix_1.eventHandlerPrefix,
        [const_1.Warn, { forbiddenPrefix: "on" }],
    ],
    [
        "avoid-risky-input-type",
        avoid_risky_input_type_1.avoidRiskyInputType,
        [const_1.Warn, { riskyValues: ["email", "number", "tel"] }],
    ],
    ["individual-import", individual_import_1.individualImport, [const_1.Warn, { targets: ["react"] }]],
];
//# sourceMappingURL=index.js.map