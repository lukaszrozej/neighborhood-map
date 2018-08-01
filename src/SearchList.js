import React from 'react';

import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '10rem',
  },
});

const SearchList = ({query, places, inputChange, selectPlace, classes}) => (
  <div>
    <TextField
      id="filter"
      label="Filter"
      aria-labelledby="Filter"
      className={classes.textField}
      margin="normal"
      value={query}
      onChange={inputChange}
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

export default withStyles(styles)(SearchList);