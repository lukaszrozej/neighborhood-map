import React from 'react';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SearchList = ({query, places, inputChange, selectPlace}) => (
  <div>
    <TextField
      label="With placeholder"
      placeholder="Placeholder"
      value={query}
      onChange={inputChange}
      margin="normal"
    />
    <List>
      {places.map(place => (
        <ListItem button onClick={selectPlace(place)} key={place.id}>
          <ListItemText primary={place.name} />
        </ListItem>
      ))}
    </List>
  </div>
)

export default SearchList;