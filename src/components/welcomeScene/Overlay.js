import React from 'react'
import { makeStyles, Container, Button, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  menu: {
    marginTop: '70vh',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
})

const Overlay = ({ handleClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container>
        <Grid
          className={classes.menu}
          container
          direction="column"
          alignItems="center"
        >
          <Grid container item xs={6} sm={4} md={3}>
            <Button
              className={classes.button}
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={handleClick}
            >
              Menu
            </Button>
          </Grid>
          <Grid container item xs={6} sm={4} md={3}>
            <Button
              className={classes.button}
              fullWidth
              variant="outlined"
              color="secondary"
            >
              Hello
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Overlay
