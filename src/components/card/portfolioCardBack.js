import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import { Button, Divider, Chip, Grid } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    minWidth: 275,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    height: 44,
    width: 44,
    minWidth: 0,
    borderRadius: 40,
    padding: 0,
  },
  gitHubButton: {
    '& .MuiSvgIcon-root': {
      fontSize: 45,
      transform: 'translate(0,-1px)',
    },
  },
  demoButton: {
    '& .MuiSvgIcon-root': {
      fontSize: 54,
      transform: 'translate(0,-5px)',
    },
  },
  backButton: {
    '& .MuiSvgIcon-root': {
      fontSize: 40,
    },
  },
  actions: { marginTop: 'auto', padding: '0 16px 16px 16px' },
  divider: { margin: '10px 0px' },
  content: { paddingBottom: '0px' },
})

export default function PortfolioCardBack({ tech, title, description }) {
  const classes = useStyles()

  const techList = tech.map(tech => (
    <Grid item>
      <Chip label={tech} />
    </Grid>
  ))

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Divider variant="fullWidth" className={classes.divider} />
        <Grid container justify="space-between" spacing={1}>
          {techList}
        </Grid>
        <Divider variant="fullWidth" className={classes.divider} />
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          variant="contained"
          className={clsx(classes.button, classes.backButton)}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          variant="contained"
          className={clsx(classes.button, classes.gitHubButton)}
        >
          <GitHubIcon />
        </Button>
        <Button
          variant="contained"
          className={clsx(classes.button, classes.demoButton)}
        >
          <PlayCircleFilledIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
