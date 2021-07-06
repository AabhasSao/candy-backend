import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
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
  const [value, setValue] = useState('Home');
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
          value="Home"
          icon={<Home />}
        />
        <BottomNavigationAction
          component={Link}
          to='/upload'
          label="Upload"
          value="Upload"
          icon={<AddCircleOutlineIcon />}
        />
        <BottomNavigationAction
          component={Link} to='/user'
          label="Profile"
          value="profile"
          icon={<AccountCircle />}
        />
    </BottomNavigation>
  );
}
