import React from 'react';
// import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { Route, useRouteMatch } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import tileData from '../dummy_data/posts.json';
import '../assets/css/gallery.css';
import UserInfo from '../components/userInfo.jsx';
import Following from '../components/following.jsx';
import Followers from '../components/followers.jsx';

const useStyles = makeStyles({
  root: {
    maxWidth: '70vw',
    margin: 'auto',
    marginTop: '2em',
    padding: '2em',
  },
});

const Profile = () => {
  const { url } = useRouteMatch();
  // const [profile, setProfile] = useState({ username: 'dummy' });
  // const [id, setId] = useState('');

  // const handleGetUser = () => {
  //   axios.get(`http://localhost:3000/user/${id}`).then((res) => {
  //     setProfile(res.data);
  //   });
  // };

  const classes = useStyles();
  const gallery = [];

  for (let i = 0; i < tileData.length; i += 3) {
    const rowItems = [];
    for (let j = i; j < i + 3; j += 1) {
      if (j >= tileData.length) {
        break;
      }
      rowItems.push(
      <div className="gallery-item">
        <div className={'post-container'}>
          <img src={tileData[j].download_url} key={tileData[j].id} />
        </div>
      </div>,
      );
    }
    gallery.push(
      <div className='gallery-row' key={i}>
      {rowItems}
    </div>,
    );
  }
  return (
      <Paper className={classes.root}>
        <Route exact={true} path={`${url}`}>
          <UserInfo />
          <div id='gallery'>
            {gallery}
          </div>
        </Route>
        <Route exact={true} path={`${url}/followings`} component={Following} />
        <Route exact={true} path={`${url}/followers`} component={Followers} />
      </Paper>
  );
};

export default Profile;
