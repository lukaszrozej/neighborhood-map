import React, { Fragment } from 'react';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SearchList from './SearchList';

const LeftDrawer = ({ query, places, inputChange, selectPlace }) => (
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
      <Drawer variant="permanent">
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

export default LeftDrawer;