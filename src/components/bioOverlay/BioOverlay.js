import React from 'react'
import {
  Container,
  Paper,
  Typography,
  makeStyles,
  Grid,
  Button,
  Chip,
  Divider,
} from '@material-ui/core'
import TransitionLink from 'gatsby-plugin-transition-link'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  paper: {
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    zIndex: 10000,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
  },
  chip: {
    border: '1px solid rgba(254,0,87,1)',
    backgroundColor: 'transparent',
    color: 'white',
  },
  divider: { margin: '10px 0px', backgroundColor: 'rgba(254,0,87,1)' },
  techDivider: { margin: '10px 5%' },
}))

const BioOverlay = ({ title, html, tech }) => {
  const classes = useStyles()

  const techList = tech.map(tech => (
    <Grid item key={tech}>
      <Chip size="small" label={tech} className={classes.chip} />
    </Grid>
  ))

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
        <Divider
          variant="fullWidth"
          className={clsx(classes.divider, classes.techDivider)}
        />
        <Typography variant="body2" color="textPrimary" align="center">
          Technologies that I have experience with
        </Typography>
        <Divider
          variant="fullWidth"
          className={clsx(classes.divider, classes.techDivider)}
        />
        <Grid container justify="center" spacing={1}>
          {techList}
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />

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
