import React, { useState } from 'react';
import axios from 'axios';
import {
  Paper, makeStyles, Button, GridListTile, GridList, CardMedia,
} from '@material-ui/core';
import CircularProfile from './circularProfile.component';

const useStyles = makeStyles({
  root: {
    maxWidth: '70vw',
    minHeight: '400px',
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
    justifyContent: 'space-evenly',
    marginTop: '1em',
  },
  bio_text: {
    display: 'flex',
    flexDirection: 'column',
  },
  small: {
    width: '100px',
    height: '100px',
  },

  user_posts: {
    marginTop: '4em',
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
  const tileData = [{
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Discovery_%28Apple%29.jpg/330px-Discovery_%28Apple%29.jpg',
    title: 'star',
    cols: 1,
  }, {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Discovery_%28Apple%29.jpg/330px-Discovery_%28Apple%29.jpg',
    title: 'star',
    cols: 1,
  }, {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Discovery_%28Apple%29.jpg/330px-Discovery_%28Apple%29.jpg',
    title: 'star',
    cols: 1,
  }];
  const classes = useStyles();

  return (
        <Paper className={classes.root} >
            <div className={classes.inputControl}>
                <input name='id' onChange={(e) => setId(e.target.value)} />
                <Button variant='contained' onClick={handleGetUser} color='secondary' >Find User</Button>
            </div>
            <div className={classes.bio}>

                <CircularProfile avatarLink={profile.imageUrl} avatarAlt={profile.username} />
                <div className={classes.bio_text}>
                    <p>{profile.username}</p>
                    <p>{profile.email}</p>
                </div>
            </div>
            <GridList cols={3}>
                {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <CardMedia>
                        <img src={tile.img} alt={tile.title} />
                    </CardMedia>
                </GridListTile>
                ))}
            </GridList>
        </Paper>
  );
};

export default Profile;
