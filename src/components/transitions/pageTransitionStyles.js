const pageTransitionStyles = {
  enter: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  exit: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  initial: { from: { opacity: 0 }, to: { opacity: 1 } },
  config: { duration: 200 },
}

export default pageTransitionStyles
