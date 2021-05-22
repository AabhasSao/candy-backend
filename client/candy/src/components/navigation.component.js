import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useState } from 'react';
import {
  Restore, Favorite, LocationOn, Folder,
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
        <BottomNavigationAction label="Recents" value="recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
    </BottomNavigation>
  );
}
