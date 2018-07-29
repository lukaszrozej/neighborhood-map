import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import SearchList from './SearchList';

const styles = {
  paper: {
    // position: 'static',
    // height: 600,
  }
}

const LeftDrawer = ({ query, places, inputChange, selectPlace, classes }) => (
  <Fragment>
    <Hidden mdUp>
      <Drawer variant="temporary">
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