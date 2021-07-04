import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import FollowersTemplate from './followersTemplate.jsx';

const Following = () => {
  const [followings, setFollowings] = useState([]);
  useEffect(async () => {
    const res = await axios.get('http://localhost:3000/user/followings', { withCredentials: true });
    setFollowings(res.data);
  }, []);
  return (<>
    <Typography
      variant='h3'
      align='center'
      color='primary'
    >
      Following
    </Typography>
    <FollowersTemplate data={followings} />
  </>);
};

export default Following;
