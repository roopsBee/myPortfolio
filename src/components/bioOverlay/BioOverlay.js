import React from 'react'
import { Container, Paper, Typography, makeStyles } from '@material-ui/core'

const text = `Duis massa ligula, finibus vel lorem ut, mollis pretium metus. In fringilla ut diam semper vehicula. Curabitur suscipit tincidunt urna, et hendrerit nunc rhoncus sit amet. Maecenas nisi quam, ornare id aliquam in, dapibus eu orci. Pellentesque tincidunt sem sed erat imperdiet, a rhoncus elit sagittis. Fusce blandit risus quam, id sagittis ipsum blandit hendrerit. Nulla nec feugiat mauris, vel convallis est. Etiam dapibus aliquam posuere. Ut pellentesque massa eget nibh scelerisque, faucibus rutrum lacus sodales. Ut vel laoreet leo. Proin sed dictum lectus. Duis fringilla fermentum tellus ac volutpat.

Vivamus consectetur, elit et vulputate blandit, mauris dolor commodo nulla, nec laoreet nunc felis et arcu. Pellentesque elementum, ex sed maximus hendrerit, orci velit ultrices nulla, nec fermentum neque lacus ut mi. Aenean id magna nunc. Vestibulum rutrum risus libero, at sodales ante scelerisque et. Proin varius orci in ex malesuada elementum. Donec rutrum neque erat, sed vulputate lectus viverra et. Suspendisse at metus dolor. Suspendisse aliquam fringilla dictum. Aliquam quam magna, tincidunt et augue vitae, blandit blandit est. Nulla facilisi. Phasellus sollicitudin dui magna, eu imperdiet quam convallis nec. In tempor quam ex, vel dignissim ipsum blandit semper.`

const useStyles = makeStyles(theme => ({
  paper: {
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}))

const BioOverlay = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          color="textSecondary"
        >
          Bio
        </Typography>
        <Typography variant="body2" color="textPrimary">
          {text}
        </Typography>
      </Paper>
    </Container>
  )
}

export default BioOverlay
