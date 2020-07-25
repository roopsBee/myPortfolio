import React from 'react'
import CheckedIcon from '@material-ui/icons/RadioButtonChecked'
import { makeStyles, Container, Button, Grid } from '@material-ui/core'
import { a, useSpring } from 'react-spring'
import TransitionLink from 'gatsby-plugin-transition-link'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  menu: {
    marginTop: '45vh',
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
    marginTop: '5vh',
  },
})

const Overlay = ({ handleClick, toggle, isSceneActive, ...props }) => {
  const classes = useStyles()

  const { transform } = useSpring({
    from: { transform: 'scale(1)' },
    to: [{ transform: 'scale(1.1)' }, { transform: 'scale(1)' }],
    config: {
      tension: 80,
      friction: 15,
      clamp: true,
      velocity: 0,
    },
    reset: true,
    loop: true,
  })

  const styles = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'rotateY(0deg)' : 'rotateY(90deg)',
  })

  const AGrid = a(Grid)

  return (
    <div className={classes.root} {...props}>
      <Container>
        <Grid
          className={classes.menu}
          container
          direction="column"
          alignItems="center"
          spacing={1}
        >
          <AGrid style={styles} container item xs={6} sm={4} md={3}>
            <Button
              component={TransitionLink}
              className={classes.button}
              fullWidth
              variant="outlined"
              color="secondary"
              to="/portfolio/"
              exit={{
                delay: 0,
                length: 0.2,
              }}
              enter={{
                delay: 0.3,
                length: 0.2,
              }}
            >
              Portfolio
            </Button>
          </AGrid>
          <AGrid style={styles} container item xs={6} sm={4} md={3}>
            <Button
              component={TransitionLink}
              className={classes.button}
              fullWidth
              variant="outlined"
              color="secondary"
              to="/bio/"
              exit={{
                delay: 0,
                length: 0.2,
              }}
              enter={{
                delay: 0.3,
                length: 0.2,
              }}
            >
              Bio
            </Button>
          </AGrid>
          <AGrid style={styles} container item xs={6} sm={4} md={3}>
            <Button
              component={TransitionLink}
              className={classes.button}
              fullWidth
              variant="outlined"
              color="secondary"
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
              Contact
            </Button>
          </AGrid>

          <AGrid style={{ transform }} className={classes.iconButtonContainer}>
            <Button
              size="large"
              className={classes.iconButton}
              startIcon={<CheckedIcon />}
              variant="outlined"
              color="secondary"
              disabled={!isSceneActive}
              onClick={handleClick}
            />
          </AGrid>
        </Grid>
      </Container>
    </div>
  )
}

export default Overlay
