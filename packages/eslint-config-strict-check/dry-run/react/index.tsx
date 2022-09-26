// eslint-disable-next-line import/no-extraneous-dependencies
import { Fragment } from "react"

import type { FC, ReactNode } from "react"

type ReactTest1Props = {
  count: number
  empty: ReactNode
  title: string
}

/**
 * @remarks
 * for checking apply if eslint-plugin-react
 */

export const ReactTest1: FC<ReactTest1Props> = (props) => {
  const { count, empty, title } = props
  return (
    // eslint-disable-next-line react/jsx-fragments
    <>
      <div>1</div>
      <div>2</div>
      {/* eslint-disable-next-line react/jsx-no-leaked-render */}
      <div>{count && title}</div>
      <div>{Boolean(count) && title}</div>
      <div>{count ? title : null}</div>
      <div>{count ? title : empty}</div>
    </>
  )
}

// eslint-disable-next-line react/function-component-definition
export function ReactTest2() {
  return (
    <Fragment>
      <div>1</div>
      <div>2</div>
    </Fragment>
  )
}
