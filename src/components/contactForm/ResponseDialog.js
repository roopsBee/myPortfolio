import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { makeStyles } from '@material-ui/core'
import { animated, useTransition } from 'react-spring'

const useStyles = makeStyles(theme => ({
  paper: {
    border: `1px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.dialog.background,
    minWidth: 350,
    minHeight: 100,
  },
  dialog: {
    '& .MuiDialog-container': {
      height: '100vh',
    },
  },
}))

const Transition = React.forwardRef((props, ref) => {
  const { in: open, children, onEnter, onExited, ...other } = props
  const transitions = useTransition(open, {
    from: { opacity: 0, transform: `perspective(600px) rotateY(90deg)` },
    enter: {
      opacity: 1,
      transform: `perspective(600px) rotateY(0deg)`,
    },
    leave: {
      opacity: 0,
      transform: `perspective(600px) rotateY(-90deg)`,
    },
    onStart: () => {
      if (open && onEnter) {
        onEnter()
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited()
      }
    },
  })

  return transitions(
    (styles, toggle) =>
      toggle && (
        <animated.div ref={ref} style={styles} {...other}>
          {children}
        </animated.div>
      )
  )
})

export default function ResponsiveDialog({ open, handleClose, message }) {
  const classes = useStyles()
  return (
    <Dialog
      className={classes.dialog}
      PaperProps={{ className: classes.paper }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
      TransitionComponent={Transition}
    >
      <DialogContent>
        <DialogContentText align="center" id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="secondary"
          variant="outlined"
          autoFocus
          fullWidth
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
