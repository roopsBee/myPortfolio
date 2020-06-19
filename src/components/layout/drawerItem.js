import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'gatsby'
import { globalHistory as history } from '@reach/router'

function DrawerItem({ name, to, handleClick, Icon, ...props }) {
  const isPath = history.location.pathname === to ? true : false

  return (
    <ListItem
      component={Link}
      to={to}
      button
      key={name}
      selected={isPath}
      onClick={handleClick}
      {...props}
    >
      {Icon ? (
        <ListItemIcon>
          <Icon color={isPath ? 'secondary' : 'primary'} />
        </ListItemIcon>
      ) : null}
      <ListItemText primary={name} />
    </ListItem>
  )
}

export default DrawerItem
