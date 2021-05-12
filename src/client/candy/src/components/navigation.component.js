import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import React from 'react';
import {Restore, Favorite, LocationOn, Folder} from '@material-ui/icons';
export default function NavigationBar() {
    return (
        <BottomNavigation value={"Recents"}   className={"hello"}>
        <BottomNavigationAction label="Recents" value="recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
    </BottomNavigation>
    );
}