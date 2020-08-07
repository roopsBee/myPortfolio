import React from 'react'
import {
  Container,
  Paper,
  Typography,
  makeStyles,
  Link,
  Button,
} from '@material-ui/core'
import TransitionLink from 'gatsby-plugin-transition-link'

const useStyles = makeStyles(theme => ({
  paper: {
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    zIndex: 10000,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
}))

const BioOverlay = ({ title, html }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="xs" disableGutters>
      <Paper className={classes.paper}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          color="textSecondary"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          dangerouslySetInnerHTML={{ __html: html }}
        ></Typography>
        <Button
          color="secondary"
          variant="outlined"
          fullWidth
          component={TransitionLink}
          to="/contact/"
          exit={{
            delay: 0,
            length: 0.2,
          }}
          enter={{
            delay: 0.3,
            length: 0.2,
          }}
        >
          Contact Me
        </Button>
      </Paper>
    </Container>
  )
}

export default BioOverlay
