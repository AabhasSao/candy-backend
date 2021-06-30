import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import PropTypes from 'prop-types';
import Post from './post.jsx';

const Feed = ({ followings }) => {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const feed = await axios.get('http://localhost:3000/user/feed');
    setPosts(feed.data);
  }, [followings]);

  return (
        <Box
            display='flex'
            flexDirection='column'
        >
            {
                posts.map((post) => <Post
                    key={post.id}
                    url={post.imageUrl}
                    username={post.User.username}
                    userImg={post.User.imageUrl}
                    description={post.description}
                    likes={post.likes}
                />)
            }
        </Box>
  );
};

Feed.propTypes = {
  followings: PropTypes.object,
};

export default Feed;
