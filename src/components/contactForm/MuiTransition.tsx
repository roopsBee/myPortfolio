import React from 'react'
import { animated, useTransition } from 'react-spring'

interface Props {
  in: {}
  onEnter: () => void
  onExited: () => void
}

const Transition: React.FC<Props> = React.forwardRef(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const { in: open, children, onEnter, onExited } = props
    const transitions = useTransition(open, {
      from: {
        opacity: 0,
        transform: `perspective(600px) rotateY(90deg)`,
      },
      enter: {
        opacity: 1,
        transform: `perspective(600px) rotateY(0deg)`,
        config: {
          mass: 1,
          tension: 300,
          friction: 20,
          precision: 0.001,
        },
      },
      leave: {
        opacity: 0,
        config: {
          mass: 10,
          tension: 350,
          friction: 20,
          precision: 0.001,
        },
      },

      onStart: () => {
        if (open && onEnter) {
          onEnter()
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited()
        }
      },
    })

    return transitions(
      (styles, toggle) =>
        toggle && (
          <animated.div ref={ref} style={styles}>
            {children}
          </animated.div>
        )
    )
  }
)

export default Transition
