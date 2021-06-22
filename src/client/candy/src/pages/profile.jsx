import React, { useState } from 'react';
import axios from 'axios';
import {
  Paper, makeStyles, Button,
} from '@material-ui/core';
import tileData from '../dummy_data/posts.json';
import CircularProfile from '../components/circularProfile.component';
import '../assets/css/gallery.css';
import UserInfo from '../components/userInfo.jsx';

const useStyles = makeStyles({
  root: {
    maxWidth: '70vw',
    margin: 'auto',
    marginTop: '2em',
    padding: '2em',
  },
  // eslint-disable-next-line quote-props
  inputControl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& input': {
      display: 'block',
      margin: '0 auto 1em auto',
    },
  },
  bio: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1em',

    '& .MuiAvatar-root': {
      marginRight: '2em',
    },
  },
});

const Profile = () => {
  const [profile, setProfile] = useState({ username: 'dummy' });
  const [id, setId] = useState('');

  const handleGetUser = () => {
    axios.get(`http://localhost:3000/user/${id}`).then((res) => {
      setProfile(res.data);
    });
  };

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
        <Paper className={classes.root} >
            <div className={classes.inputControl}>
                <input name='id' onChange={(e) => setId(e.target.value)} />
                <Button
                  variant='contained'
                  onClick={handleGetUser}
                  color='secondary' >
                    Find User
                  </Button>
            </div>
            <div className={classes.bio}>
                <CircularProfile avatarLink={profile.imageUrl} avatarAlt={profile.username} />
                <UserInfo />
            </div>
            <div id="gallery">
              {gallery}
            </div>
        </Paper>
  );
};

export default Profile;
