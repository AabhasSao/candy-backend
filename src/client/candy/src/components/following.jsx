import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    maxWidth: '350px',
    margin: 'auto',
  },
});

const Following = () => {
  const classes = useStyles();
  return (
        <List
            className={classes.root}
        >
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        color='secondary'
                        alt='user image'
                    >
                        R
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>Britney Spears</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        color='secondary'
                        alt='user image'
                    >
                        R
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>Britney Spears</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        color='secondary'
                        alt='user image'
                    >
                        R
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>Britney Spears</ListItemText>
            </ListItem>
        </List>
  );
};

export default Following;
