import { eventHandlerPrefix } from "../../rules/event-handler-prefix"
import { Warn } from "../../shared/const"

import type { MasterRecord } from "../../shared/types"

export const Master: MasterRecord[] = [
  [
    "event-handler-prefix",
    eventHandlerPrefix,
    [Warn, { forbiddenPrefix: "on" }],
  ],
]
