import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Img from 'gatsby-image'
import CardMenuButton from './cardMenuButton'

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    minWidth: 275,
    minHeight: 400,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #f50057',
    backgroundColor: 'rgba(254,0,87,0.3)',
  },
  button: {
    height: 40,
    minWidth: 75,
    paddingRight: 22,
    paddingLeft: 22,
  },
  title: {
    color: 'rgba(254,0,87,1)',
  },
  img: { maxHeight: 300 },
  actions: { marginTop: 'auto' },
})

export default function PortfolioCardFront({
  fluidImage,
  imageTitle,
  imageAlt,
  title,
  summary,
  flipCard,
  url,
  codeUrl,
}) {
  const classes = useStyles()

  const handleInfoClick = event => {
    flipCard()
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.img}
        component={Img}
        fluid={fluidImage}
        title={imageTitle}
        alt={imageAlt}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {summary}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <CardMenuButton
          handleInfoClick={handleInfoClick}
          url={url}
          codeUrl={codeUrl}
        />
      </CardActions>
    </Card>
  )
}
