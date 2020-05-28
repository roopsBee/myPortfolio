import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Img from 'gatsby-image'
import { Paper } from '@material-ui/core'
import CardMenuButton from './card/cardMenuButton'
import useWindowSize from '../hooks/useWindowSize'

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    minWidth: 275,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    height: 40,
    minWidth: 75,
    paddingRight: 22,
    paddingLeft: 22,
  },
  img: { maxHeight: 300 },
  actions: { marginTop: 'auto' },
  back: {
    position: 'absolute',
    width: rect => rect.cardWidth,
    height: rect => rect.cardHeight,
  },
})

export default function PortfolioCard({
  fluidImage,
  imageTitle,
  title,
  summary,
}) {
  const [rect, setRect] = React.useState({})
  const classes = useStyles(rect)
  const cardRef = React.useRef()
  const [winWidth, winHeight] = useWindowSize()

  const handleInfoClick = event => {}

  React.useEffect(() => {
    let cardHeight = cardRef.current.getClientRects()[0].height
    let cardWidth = cardRef.current.getClientRects()[0].width
    setRect({ cardHeight, cardWidth })
  }, [winWidth, winHeight])

  return (
    <>
      <Card ref={cardRef} className={classes.root}>
        <CardMedia
          className={classes.img}
          component={Img}
          fluid={fluidImage}
          title={imageTitle}
          alt="portfolio image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <CardMenuButton handleInfoClick={handleInfoClick} />
        </CardActions>
      </Card>

      <Paper className={classes.back}>The content of the back.</Paper>
    </>
  )
}
