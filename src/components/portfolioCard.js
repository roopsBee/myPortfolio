import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import GithubButton from './githubButton/GithubButton'
import CardMenuButton from './cardMenuButton'

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    minWidth: 275,
  },
  button: {
    height: 40,
    minWidth: 75,
    paddingRight: 22,
    paddingLeft: 22,
  },
  img: { maxHeight: 300 },
})

export default function PortfolioCard({
  fluidImage,
  imageTitle,
  title,
  summary,
}) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.img}
        component={Img}
        fluid={fluidImage}
        title={imageTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <CardMenuButton />
      </CardActions>
    </Card>
  )
}
