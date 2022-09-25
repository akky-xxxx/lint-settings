// eslint-disable-next-line import/no-extraneous-dependencies
import { Fragment } from "react"

import type { FC } from "react"

/**
 * @remarks
 * for checking apply if eslint-plugin-react
 */

export const ReactTest1: FC = () => (
  // eslint-disable-next-line react/jsx-fragments
  <>
    <div>1</div>
    <div>2</div>
  </>
)

// eslint-disable-next-line react/function-component-definition
export function ReactTest2() {
  return (
    <Fragment>
      <div>1</div>
      <div>2</div>
    </Fragment>
  )
}
