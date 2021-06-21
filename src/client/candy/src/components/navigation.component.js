import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home, Favorite, LocationOn, AccountCircle,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fixed: {
    bottom: '0',
    alignItems: 'center',
    position: 'fixed',
    width: '100vw',
  },
});

export default function NavigationBar() {
  const [value, setValue] = useState();
  const classes = useStyles();

  return (
    <BottomNavigation value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.fixed}
    >
        <BottomNavigationAction
          component={Link}
          to='/'
          label="Home"
          value="home"
          icon={<Home />}
        />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
        <BottomNavigationAction
          component={Link} to='/user'
          label="Profile"
          value="profile"
          icon={<AccountCircle />}
        />
    </BottomNavigation>
  );
}
