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

export default function PortfolioCard() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dogs.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.img}
        component={Img}
        fluid={data.file.childImageSharp.fluid}
        title="Floofy dogs"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <CardMenuButton />
      </CardActions>
    </Card>
  )
}
