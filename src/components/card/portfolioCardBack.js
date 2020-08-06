import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import { Button, Divider, Chip, Grid, Link } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    minWidth: 275,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #f50057',
    backgroundColor: 'rgba(254,0,87,0.3)',
    margin: 8,
  },
  button: {
    height: 44,
    width: 44,
    minWidth: 0,
    borderRadius: 40,
    padding: 0,
    color: 'black',
    backgroundColor: 'rgba(254,0,87,0.5)',
    border: '2px solid rgba(254,0,87,1)',
    '&:hover': {
      borderColor: 'white',
    },
  },
  title: {
    color: 'rgba(254,0,87,1)',
  },
  gitHubButton: {
    '& .MuiSvgIcon-root': {
      fontSize: 40,
    },
  },
  demoButton: {
    '& .MuiSvgIcon-root': {
      fontSize: 48,
    },
  },
  backButton: {
    '& .MuiSvgIcon-root': {
      fontSize: 40,
    },
  },
  actions: { padding: '0 16px 16px 16px' },
  divider: { margin: '10px 0px', backgroundColor: 'rgba(254,0,87,1)' },
  content: { paddingBottom: '0px', marginBottom: 'auto' },
  tech: { padding: '0px 16px' },
  chip: {
    border: '1px solid rgba(254,0,87,1)',
    backgroundColor: 'transparent',
    color: 'white',
  },
})

export default function PortfolioCardBack({
  tech,
  title,
  descriptionHTML,
  flipCard,
  url,
  codeUrl,
}) {
  const classes = useStyles()

  const handleBack = () => {
    flipCard()
  }

  const techList = tech.map(tech => (
    <Grid item key={tech}>
      <Chip size="small" label={tech} className={classes.chip} />
    </Grid>
  ))

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          component="div"
          dangerouslySetInnerHTML={{ __html: descriptionHTML }}
        ></Typography>
      </CardContent>
      <CardContent className={classes.tech}>
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
          onClick={handleBack}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          variant="contained"
          className={clsx(classes.button, classes.gitHubButton)}
          component={Link}
          href={codeUrl}
          target="_blank"
        >
          <GitHubIcon />
        </Button>
        <Button
          variant="contained"
          className={clsx(classes.button, classes.demoButton)}
          component={Link}
          href={url}
          target="_blank"
        >
          <PlayCircleFilledIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
