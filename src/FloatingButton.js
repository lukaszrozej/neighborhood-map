import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
    zIndex: 10,
  },
});

const FloatingButton = ({ classes, toggleDrawer}) => (
  <Button
    variant="fab"
    color="primary"
    aria-label="Menu"
    // className={classes.button}
    onClick={toggleDrawer}
    classes={{fab: classes.fab}}
  >
    <MenuIcon />
  </Button>
)

export default withStyles(styles)(FloatingButton);
