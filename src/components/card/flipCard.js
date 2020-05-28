import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import useWindowSize from '../../hooks/useWindowSize'

const useStyles = makeStyles({
  front: {
    maxWidth: 375,
    minWidth: 275,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  back: {
    position: 'absolute',
    width: rect => rect.cardWidth,
    height: rect => rect.cardHeight,
  },
})
export default function FlipCard({ CardFront, CardBack }) {
  const [rect, setRect] = React.useState({})
  const classes = useStyles(rect)
  const cardRef = React.useRef()
  const [winWidth, winHeight] = useWindowSize()

  React.useEffect(() => {
    let cardHeight = cardRef.current.getClientRects()[0].height
    let cardWidth = cardRef.current.getClientRects()[0].width
    setRect({ cardHeight, cardWidth })
  }, [winWidth, winHeight])

  return (
    <>
      <div className={classes.front} ref={cardRef}>
        {CardFront}
      </div>
      <div className={classes.back}>{CardBack}</div>
    </>
  )
}
