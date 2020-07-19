import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { makeStyles } from '@material-ui/core'
import MuiTransition from './MuiTransition'

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
      TransitionComponent={MuiTransition}
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
          // eslint-disable-next-line
          autoFocus
          fullWidth
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
