import React from 'react'
import { Divider, List } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import DrawerItem from './DrawerItem'

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
      </List>
    </div>
  )
}

export default DrawerItems
