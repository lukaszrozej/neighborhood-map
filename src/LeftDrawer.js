import React, { Fragment } from 'react';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

const LeftDrawer = props => (
  <Fragment>
    <Hidden mdUp>
      <Drawer variant="temporary">
        <p>one</p>
        <p>two</p>
        <p>three</p>
      </Drawer>
    </Hidden>
    <Hidden smDown>
      <Drawer variant="permanent">
        <p>one</p>
        <p>two</p>
        <p>three</p>
      </Drawer>
    </Hidden>
  </Fragment>
)

export default LeftDrawer;