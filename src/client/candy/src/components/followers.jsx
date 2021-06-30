import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import FollowersTemplate from './followersTemplate.jsx';

const Following = () => {
  const [followers, setFollowers] = useState([]);
  useEffect(async () => {
    const res = await axios.get('http://localhost:3000/user/followers');
    setFollowers(res.data);
  }, []);
  return (<>
    <Typography
      variant='h3'
      align='center'
      color='primary'
    >
      Followers
    </Typography>
    <FollowersTemplate data={followers} />
  </>);
};

export default Following;
