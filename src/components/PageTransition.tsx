// Component to use with gatsby-plugin-transition-link
// Uses react spring to manage page transition animations
// Takes transitionStatus from gatsby transition link, transitionStyles

import React from 'react'
import { a, useSpring } from 'react-spring'

import useTransitionStatus from '../hooks/useTransitionStatus'

interface Props {
  transitionStatus: any
  transitionStyles: {
    enter: { to: {}; from: {} }
    exit: { to: {}; from: {} }
    initial?: { from: {}; to: {} }
    config?: {}
  }
  config?: {}
}

const PageTransition: React.FC<Props> = ({
  children,
  transitionStatus,
  transitionStyles,
}) => {
  const [entering, exiting] = useTransitionStatus(transitionStatus)

  const { enter, exit } = transitionStyles

  const initial = transitionStyles.initial
    ? transitionStyles.initial
    : { from: {}, to: {} }

  const config = transitionStyles.config ? transitionStyles.config : {}

  const styles = useSpring({
    from: entering ? enter.from : exiting ? exit.from : initial.from || {},
    to: entering ? enter.to : exiting ? exit.to : initial.to || {},
    config,
  })

  return <a.div style={styles}>{children}</a.div>
}

export default PageTransition
