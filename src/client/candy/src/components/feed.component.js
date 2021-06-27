import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Post from './post.jsx';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const feed = await axios.get('http://localhost:3000/user/feed');
    setPosts(feed.data);
  }, []);
  console.log(posts);

  return (
        <Box
            display='flex'
            flexDirection='column'
        >
            {
                posts.map((post) => <Post
                    key={post.id}
                    url={post.imageUrl}
                />)
            }
        </Box>
  );
};

export default Feed;
