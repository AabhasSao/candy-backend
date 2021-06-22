import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& .user-stats': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
});

const UserInfo = () => {
  const classes = useStyles();
  return (
        <div className={classes.root} id="user-info">
            <div className="username">
                <p>kirito</p>
            </div>
            <div className="user-stats">
                <p>23 posts</p>
                <p>236 following</p>
                <p>236 followers</p>
            </div>
            <div id="user-full-name">

            </div>
            <div id="user-bio">

            </div>
        </div>
  );
};

export default UserInfo;
