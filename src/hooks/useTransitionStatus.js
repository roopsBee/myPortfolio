// for use with gatsby-plugin-transition-link

import { useState, useEffect } from 'react'

const useTransitionStatus = transitionStatus => {
  const [entering, setEntering] = useState(false)
  const [entered, setEntered] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [exited, setExited] = useState(false)

  useEffect(() => {
    if (transitionStatus === 'entering') {
      setEntering(true)
    }
    if (transitionStatus === 'entered') {
      setEntered(true)
    }
    if (transitionStatus === 'exiting') {
      setExiting(true)
    }
    if (transitionStatus === 'exited') {
      setExited(true)
    }
  }, [transitionStatus])
  return [entering, exiting, entered, exited]
}

export default useTransitionStatus
