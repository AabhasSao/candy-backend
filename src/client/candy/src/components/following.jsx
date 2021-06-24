import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';

const useStyeles = makeStyles({
    root: {
        maxWidth: '350px';
    }
});

const Following = () => (
        <List className={classes.root}>
            <ListItem>
                <ListItemText>Britney Spears</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Britney Spears</ListItemText>
            </ListItem>
        </List>
);

export default Following;
