import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { makeStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import GitHubIcon from '@material-ui/icons/GitHub'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import { Link } from '@material-ui/core'

const useStyles = makeStyles({
  menuButton: {
    width: 0,
    minWidth: 30,
    borderRadius: 30,
  },
  menu: {
    '& .MuiMenu-list': {
      padding: 0,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      padding: '0 16px 0 0',
    },
  },
})

export default function CardMenuButton({ handleInfoClick, url, codeUrl }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.menuButton}
      >
        <MenuRoundedIcon />
      </Button>
      <Menu
        className={classes.menu}
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          href={codeUrl}
          target="_blank"
        >
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="VIEW CODE" />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          href={url}
          target="_blank"
        >
          <ListItemIcon>
            <PlayCircleFilledIcon />
          </ListItemIcon>
          <ListItemText primary="LIVE DEMO" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            handleInfoClick()
          }}
        >
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="MORE INFO" />
        </MenuItem>
      </Menu>
    </div>
  )
}
