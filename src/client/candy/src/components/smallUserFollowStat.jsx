/* eslint-disable react/display-name */
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const SmallUserFollowStat = React.forwardRef((props, ref) => <React.Fragment {...props} ref={ref} >
        <ListItemAvatar>
            <Avatar
                color='secondary'
                alt='user image'
            >
                R
            </Avatar>
        </ListItemAvatar>
        <ListItemText>Britney Spears</ListItemText>
    </React.Fragment>);

export default SmallUserFollowStat;
