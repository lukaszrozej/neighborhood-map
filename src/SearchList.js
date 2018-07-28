import React from 'react';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SearchList = props => (
  <div>
    <TextField
      label="With placeholder"
      placeholder="Placeholder"
      margin="normal"
    />
    <List>
      <ListItem>
        <ListItemText primary="one" />
      </ListItem>
      <ListItem>
        <ListItemText primary="one" />
      </ListItem>
      <ListItem>
        <ListItemText primary="one" />
      </ListItem>
    </List>
  </div>
)

export default SearchList;