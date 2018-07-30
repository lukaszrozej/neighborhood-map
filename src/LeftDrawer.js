import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchList from './SearchList';

const styles = {
  paper: {
    position: 'static',
    width: "12rem"
  }
}

const LeftDrawer = ({ query, places, inputChange, selectPlace, classes, toggleDrawer, drawerOpen }) => (
  <Drawer
    open={drawerOpen}
    onOpen={toggleDrawer}
    onClose={toggleDrawer}
    variant="persistent"
    classes={{paper: classes.paper}}
  >
    <IconButton onClick={toggleDrawer}>
      <ChevronLeftIcon />
    </IconButton>
    <SearchList
      query={query}
      places={places}
      inputChange={inputChange}
      selectPlace={selectPlace}
    />
  </Drawer>
)

export default withStyles(styles)(LeftDrawer);