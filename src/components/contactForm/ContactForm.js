import React from 'react'
import { Formik, Form } from 'formik'
import { Button, Paper, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as yup from 'yup'

import FormikTextField from './FormikTextField.js'
import sendMail from './sendMail'
import useResponsiveValue from '../../hooks/useResponsiveValue'
import ResponseDialog from './ResponseDialog'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1, 0, 1),
    padding: theme.spacing(0, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 3, 0),
  },
  container: {
    padding: 0,
  },
}))

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(40)
    .required('Name Required'),
  email: yup
    .string()
    .trim()
    .max(40)
    .required('Email Required')
    .email('Enter a valid Email'),
  subject: yup
    .string()
    .max(30)
    .required('Subject Required'),
  text: yup
    .string()
    .min(10, 'Message is too short')
    .max(500, 'Max 500 characters')
    .required('Enter a  Message'),
})

export default function ContactForm() {
  const [dialogMessage, setDialogMessasge] = useState('')
  const classes = useStyles()
  const [dialogOpen, setDialogOpen] = useState(false)
  const handleClose = () => {
    setDialogOpen(false)
  }

  const responsiveMargin = useResponsiveValue(
    'normal',
    'dense',
    'dense',
    'dense',
    'dense'
  )

  return (
    <div className="Login">
      <Container maxWidth="xs" className={classes.container}>
        <Paper elevation={10} className={classes.paper}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              subject: '',
              text: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                const isSuccess = await sendMail(values)
                if (isSuccess) {
                  setDialogMessasge('Mail sent')
                  resetForm()
                } else {
                  setDialogMessasge(
                    'An error occured, email portfolio@roopeshpatel.com'
                  )
                }
                setDialogOpen(true)
              } catch (err) {
                setDialogMessasge(
                  'An error occured, email portfolio@roopeshpatel.com'
                )
                console.log(err)
                setDialogOpen(true)
              }
            }}
            validateOnChange={false}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form className={classes.form}>
                <Typography component="h1" variant="h5">
                  Contact Me
                </Typography>

                <FormikTextField
                  color="secondary"
                  margin={responsiveMargin}
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                />
                <FormikTextField
                  color="secondary"
                  margin={responsiveMargin}
                  fullWidth
                  id="email"
                  label="Your Email Address"
                  name="email"
                  type="email"
                />
                <FormikTextField
                  color="secondary"
                  margin={responsiveMargin}
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  type="subject"
                />
                <FormikTextField
                  color="secondary"
                  margin={responsiveMargin}
                  fullWidth
                  multiline
                  rows={5}
                  id="text"
                  label="Message..."
                  name="text"
                  type="text"
                />

                <Button
                  className={classes.submit}
                  disabled={isSubmitting}
                  color="secondary"
                  variant="outlined"
                  type="submit"
                  fullWidth
                >
                  Send Message
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
      <ResponseDialog
        open={dialogOpen}
        handleClose={handleClose}
        message={dialogMessage}
      />
    </div>
  )
}
