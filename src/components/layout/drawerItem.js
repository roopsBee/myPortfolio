import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import TransitionLink from 'gatsby-plugin-transition-link'

import { globalHistory as history } from '@reach/router'
import { useMediaQuery } from '@material-ui/core'

function DrawerItem({ name, to, handleClick, Icon, ...props }) {
  const isPath = history.location.pathname === to ? true : false
  const isSmAndUp = useMediaQuery(theme => theme.breakpoints.up('sm'))

  return (
    <ListItem
      dense={isSmAndUp}
      component={TransitionLink}
      to={to}
      button
      key={name}
      selected={isPath}
      onClick={handleClick}
      {...props}
      exit={{
        delay: 0,
        length: 0.2,
      }}
      enter={{
        delay: 0.3,
        length: 0.2,
      }}
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
