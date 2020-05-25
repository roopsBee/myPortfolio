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
        <DrawerItem
          name="Home"
          to="/"
          Icon={HomeIcon}
          onClick={handleListItemClick}
        />
        <DrawerItem
          name="Portfolio"
          to="/portfolio"
          Icon={HomeIcon}
          onClick={handleListItemClick}
        />
        <DrawerItem
          name="Contact"
          to="/contact"
          Icon={HomeIcon}
          onClick={handleListItemClick}
        />
      </List>
    </div>
  )
}

export default DrawerItems
