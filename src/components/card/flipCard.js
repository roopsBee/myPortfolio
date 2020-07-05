/*  
  Receives Front and back card component
  Back card will have same bounding box as front card
  Front and back card will receive a 
  flipCard function to toggle flip
  requires useWindowSize hook
*/

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSpring, animated } from 'react-spring'

import useWindowSize from '../../hooks/useWindowSize'
import clsx from 'clsx'

const useStyles = makeStyles({
  front: {
    maxWidth: 375,
    minWidth: 275,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
  },
  back: {
    position: 'absolute',
    height: 100,
    width: rect => rect.cardWidth,
    minHeight: rect => rect.cardHeight,
    zIndex: 0,
  },
  flipped: {
    zIndex: 2,
  },
})
export default function FlipCard({ CardFront, CardBack }) {
  const [rect, setRect] = useState({})
  const [flipped, setFlipped] = useState(false)
  const [winWidth, winHeight] = useWindowSize()

  const classes = useStyles(rect)
  const cardRef = React.useRef()

  React.useEffect(() => {
    setRect({
      cardHeight: cardRef.current.getClientRects()[0].height,
      cardWidth: cardRef.current.getClientRects()[0].width,
    })
  }, [winWidth, winHeight])

  const flipCard = () => {
    console.log('flip')

    setFlipped(!flipped)
  }

  const config = {
    mass: 1,
    tension: 500,
    friction: 80,
  }

  const backStyles = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(700px) rotateY(${!flipped ? 180 : 360}deg)`,
    config,
  })

  const frontStyles = useSpring({
    opacity: !flipped ? 1 : 0,
    transform: `perspective(700px) rotateY(${!flipped ? 0 : 180}deg)`,
    config,
  })

  return (
    <>
      <animated.div style={frontStyles} className={classes.front} ref={cardRef}>
        {React.cloneElement(CardFront, { flipCard: flipCard })}
      </animated.div>

      <animated.div
        style={backStyles}
        className={clsx(classes.back, flipped && classes.flipped)}
      >
        {React.cloneElement(CardBack, { flipCard: flipCard })}
      </animated.div>
    </>
  )
}
