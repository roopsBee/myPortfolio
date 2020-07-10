import React from 'react'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const successStyle = makeStyles(theme => ({
  success: {
    '& label': {
      color: theme.palette.success.main,
    },
    '& label.Mui-focused': {
      color: theme.palette.success.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.success.main,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.success.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.success.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.success.main,
      },
    },
  },
}))

const FormikTextField = ({ showSuccessStyle = true, ...props }) => {
  const classes = successStyle()
  let classNames
  const [field, meta] = useField(props)
  const helperText = meta.error && meta.touched ? meta.error : ''
  if (!meta.error && meta.touched && showSuccessStyle) {
    classNames = classes.success
  } else {
    classNames = ''
  }
  return (
    <TextField
      {...field}
      {...props}
      error={!!helperText}
      helperText={helperText}
      className={classNames}
      variant={props.variant || 'outlined'}
    />
  )
}

export default FormikTextField
