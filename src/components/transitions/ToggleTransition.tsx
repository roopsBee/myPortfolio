import React from 'react'
import { a, useTransition } from 'react-spring'

interface Props {
  toggle: boolean
  transitionStyles: {
    from: {}
    enter: {}
    leave?: {}
    config?: {}
  }
}

const ToggleTransition: React.FC<Props> = ({
  toggle = false,
  transitionStyles,
  children,
}) => {
  const transitions = useTransition(toggle, transitionStyles)

  return transitions(
    (styles, toggle) => toggle && <a.div style={styles}>{children}</a.div>
  )
}
export default ToggleTransition
