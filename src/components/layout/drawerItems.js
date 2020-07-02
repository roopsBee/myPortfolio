import React from 'react'
import { Divider, List } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import DrawerItem from './drawerItem'

const DrawerItems = ({ handleListItemClick, classes }) => {
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List disablePadding={true}>
        <DrawerItem name="Home" to="/" onClick={handleListItemClick} />
        <DrawerItem
          name="Portfolio"
          to="/portfolio/"
          onClick={handleListItemClick}
        />
        <DrawerItem name="Bio" to="/bio/" onClick={handleListItemClick} />
        <DrawerItem
          name="Contact"
          to="/contact/"
          onClick={handleListItemClick}
        />
      </List>
    </div>
  )
}

export default DrawerItems
