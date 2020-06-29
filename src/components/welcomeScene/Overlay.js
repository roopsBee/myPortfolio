import React from 'react'
import CheckedIcon from '@material-ui/icons/RadioButtonChecked'
import { makeStyles, Container, Button, Grid } from '@material-ui/core'
import { a, useSpring } from 'react-spring'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  menu: {
    marginTop: '60vh',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderWidth: 2,
    '&:hover': {
      borderWidth: 2,
    },
  },
  iconButton: {
    borderRadius: '25px',
    borderWidth: 3,
    minWidth: 0,
    transformOrigin: 'center',
    width: 0,
    '&:hover': {
      borderWidth: 3,
    },
    '& .MuiButton-startIcon': {
      margin: 0,
    },
  },
  iconButtonContainer: {
    marginTop: '10vh',
  },
})

const Overlay = ({ handleClick, toggle }) => {
  const classes = useStyles()

  const { transform } = useSpring({
    from: { transform: 'scale(1)' },
    to: async next => {
      while (1) {
        await next({ transform: 'scale(1.1)' })
        await next({ transform: 'scale(1)' })
      }
    },
    config: {
      tension: 80,
      friction: 15,
      clamp: true,
      velocity: 0,
    },
    reset: true,
  })

  const styles = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'rotateY(0deg)' : 'rotateY(90deg)',
  })

  const AGrid = a(Grid)

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          className={classes.menu}
          container
          direction="column"
          alignItems="center"
        >
          <AGrid style={styles} container item xs={6} sm={4} md={3}>
            <Button
              className={classes.button}
              fullWidth
              variant="outlined"
              color="secondary"
            >
              Menu
            </Button>
          </AGrid>
          <AGrid style={styles} container item xs={6} sm={4} md={3}>
            <Button
              className={classes.button}
              fullWidth
              variant="outlined"
              color="secondary"
            >
              Hello
            </Button>
          </AGrid>
          <Grid>
            <a.div
              style={{ transform }}
              className={classes.iconButtonContainer}
            >
              <Button
                size="large"
                className={classes.iconButton}
                startIcon={<CheckedIcon />}
                variant="outlined"
                color="secondary"
                onClick={handleClick}
              />
            </a.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Overlay
