import React from 'react'
import { Container, Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    zIndex: 10,
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
          align="center"
          variant="body2"
          color="textPrimary"
          dangerouslySetInnerHTML={{ __html: html }}
        ></Typography>
      </Paper>
    </Container>
  )
}

export default BioOverlay
