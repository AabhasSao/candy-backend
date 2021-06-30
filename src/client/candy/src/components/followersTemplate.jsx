import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    maxWidth: '350px',
    margin: 'auto',
  },
});

const FollowersTemplate = ({ data }) => {
  const classes = useStyles();
  return (
        <List
            className={classes.root}
        >
            {
                data.map((item) => (
                        <ListItem
                            key={item.username}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    color='secondary'
                                    alt='user image'
                                >
                                    R
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>{item.username}</ListItemText>
                        </ListItem>
                ))
            }
        </List>
  );
};

FollowersTemplate.propTypes = {
  data: PropTypes.array,
};

export default FollowersTemplate;
