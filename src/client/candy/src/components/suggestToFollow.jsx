import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { Button, makeStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// const data = [
//   {
//     img: 'https://images.unsplash.com/photo-1524255684952-d7185b509571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     user_handle: 'Annee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1602077422495-c8733eb58c34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
//     user_handle: 'Jamie',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1499540785729-ac6adfa4efbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     user_handle: 'Anne',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1524255684952-d7185b509571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     user_handle: 'Annee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1602077422495-c8733eb58c34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
//     user_handle: 'Jamie',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1499540785729-ac6adfa4efbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     user_handle: 'Anne',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1524255684952-d7185b509571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     user_handle: 'Annee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1602077422495-c8733eb58c34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
//     user_handle: 'Jamie',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1499540785729-ac6adfa4efbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     user_handle: 'Anne',
//   },

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

const SuggestToFollow = () => {
  const [suggestions, setSuggestions] = useState([]);
  const classes = useStyles();

  const handleFollow = async (id) => {
    const follow = await axios.get(`http://localhost:3000/user/${id}/follow`);
    console.log(follow);
  };

  useEffect(async () => {
    const sgs = await axios.get('http://localhost:3000/user/suggestions');
    setSuggestions(sgs.data);
  }, []);
  console.log('suggestoins', suggestions);

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
                    <Card className={classes.user} key={item.username} >
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
                            <Button
                                onClick={() => handleFollow(item.username)}
                                variant='outlined'
                            >
                                <Typography
                                    variant='body1'
                                    color='primary'
                                >
                                    Follow
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </Box>
    </Box>
  );
};

export default SuggestToFollow;
