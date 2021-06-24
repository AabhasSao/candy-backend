import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '100vw',
    },
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2em',
    maxWidth: '50vw',
    margin: 'auto',
    flexWrap: 'wrap',
  },
  left: {
    flexGrow: '2',
  },
  right: {
    flexGrow: '8',
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    '& li': {
      width: 'auto',
    },
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  return (
      <Card className={classes.root} >
        <CardHeader
          className={classes.left}
          avatar={
            <Avatar >
              LR
            </Avatar>
          }

        />
        <CardContent className={classes.right} >
          <Box
            flex
            flexDirection='column'
          >
            <List
              disablePadding
            >
              <ListItem >
                <ListItemText primary={
                  <Typography
                    variant='h5'
                  >
                    kirito
                  </Typography>
                } />
              </ListItem>
            </List>

            <List
              className={classes.stats}
              disablePadding
            >
              <ListItem
                button
                component='a'
                href='/'
              >
               <ListItemText primary='23 posts' />
              </ListItem>
              <ListItem
                button
                component={Link}
                to='/user/foo'
              >
               <ListItemText primary='236 followers' />
              </ListItem>
              <ListItem
                button
                component={Link}
                to='/user/foo'
              >
               <ListItemText primary='23 followings' />
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
  // <div className={classes.root} id="user-info">
  //     <div className="username">
  //         <p>kirito</p>
  //     </div>
  //     <div className="user-stats">
  //         <p>23 posts</p>
  //         <p>236 following</p>
  //         <p>236 followers</p>
  //     </div>
  //     <div id="user-full-name">

  //     </div>
  //     <div id="user-bio">

  //     </div>
  // </div>
  );
};

export default UserInfo;
