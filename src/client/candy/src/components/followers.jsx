import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import FollowersTemplate from './followersTemplate.jsx';
import { userRoutes } from '../routes/routes';

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  useEffect(async () => {
    const res = await axios.get(userRoutes.followers, { withCredentials: true });
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

export default Followers;
