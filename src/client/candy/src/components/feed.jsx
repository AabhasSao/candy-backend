import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Post from './post.jsx';
import { userRoutes } from '../routes/routes';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
    margin: 'auto auto 1.4em auto',
    backgroundColor: theme.primary,
  },
}));

const Feed = ({ followings }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const feed = await axios.get(userRoutes.feed, { withCredentials: true });

    if (!_.isEmpty(feed)) {
      setPosts(feed.data);
    }
  }, [followings]);

  return (
        <Box
            className={classes.root}
            display='flex'
            flexDirection='column'
        >
            {
                posts
                  ? posts.map((post) => <Post
                    key={post.postId}
                    url={post.imageUrl}
                    username={post.User.username}
                    userImg={post.User.imageUrl}
                    description={post.description}
                    likes={post.likes}
                    id={post.postId}
                />)
                  : 'no posts'
            }
        </Box>
  );
};

Feed.propTypes = {
  followings: PropTypes.object,
};

export default Feed;
