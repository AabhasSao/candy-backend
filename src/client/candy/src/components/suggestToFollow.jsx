import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { Button, makeStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  suggestions: {
    maxWidth: '70vw',
    margin: `${theme.spacing(3)}px auto ${theme.spacing(3)}px auto`,
    overflow: 'auto',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto',
  },
  user: {
    minWidth: '130px',
    marginRight: theme.spacing(4),
    padding: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(1),
  },
  action: {
    justifyContent: 'center',
  },
}));

const SuggestToFollow = ({ followings }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [followstatus, setFollowstatus] = useState({});

  const classes = useStyles();

  // Triggered when Follow button is clicked
  const handleFollow = async (id) => {
    if (followings[id]) return;
    const follow = await axios.get(`http://localhost:3000/user/${id}/follow`, { withCredentials: true });
    // console.log(id);
    const obj = { ...followstatus };
    obj[id] = !obj[id];
    setFollowstatus(obj);
    console.log(follow);
    // console.log('followstatus', followstatus);
  };

  // Fetch data during initialization of component
  useEffect(async () => {
    const sgs = await axios.get('http://localhost:3000/user/suggestions');
    setSuggestions(sgs.data);
    const obj = {};

    // console.log('followings', followings);

    sgs.data.forEach((item) => {
      let ans = false;
      if (followings[item.username]) ans = true;
      // console.log(item.username, followings[item.username]);
      obj[item.username] = ans;
    });
    setFollowstatus(obj);
  }, [followings]);
  // console.log('suggestoins', suggestions);
  // console.log('fst', followstatus);
  return (
    <Box
        display='flex'
        flexDirection='column'
        className={classes.root}
    >
        <Typography
            variant='h4'
            color='primary'
            align='center'
        >
            You might Know
        </Typography>
        <Box
            className={classes.suggestions}
            display='flex'
            flexDirection='row'
        >
            {
            suggestions.map((item) => (
              <Card
                className={classes.user}
                key={item.username}
              >
                  <Avatar
                      className={classes.avatar}
                      src={item.imageUrl}
                  >
                      RS
                  </Avatar>
                  <CardContent
                      className={classes.content}
                  >
                      <Typography
                          variant='body1'
                          align='center'
                      >
                          {item.username}
                      </Typography>
                  </CardContent>
                  <CardActions
                      className={classes.action}
                      disableSpacing
                  >
                    {
                      followstatus[item.username]
                        ? (<Button
                            onClick={() => handleFollow(item.username)}
                            variant='outlined'
                            color='secondary'
                          >
                            <Typography
                                variant='body1'
                                color='secondary'
                            >
                              Unfollow
                            </Typography>
                          </Button>)
                        : (<Button
                              onClick={() => handleFollow(item.username)}
                              variant='outlined'
                          >
                              <Typography
                                  variant='body1'
                                  color='primary'
                              >
                                Follow
                              </Typography>
                          </Button>)
                    }
                  </CardActions>
              </Card>
            ))
            }
        </Box>
    </Box>
  );
};

SuggestToFollow.propTypes = {
  followings: PropTypes.object,
};

export default SuggestToFollow;
