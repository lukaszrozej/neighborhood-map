import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchList from './SearchList';

const styles = {
  paper: {
    // position: 'static',
    // height: 600,
  }
}

const LeftDrawer = ({ query, places, inputChange, selectPlace, classes, toggleDrawer, drawerOpen }) => (
  <Fragment>
    <Hidden mdUp>
      <Drawer
        open={drawerOpen}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
        variant="temporary"
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
    </Hidden>
    <Hidden smDown>
      <Drawer variant="permanent" classes={{paper: classes.paper}}>
        <SearchList
          query={query}
          places={places}
          inputChange={inputChange}
          selectPlace={selectPlace}
        />
      </Drawer>
    </Hidden>
  </Fragment>
)

export default withStyles(styles)(LeftDrawer);