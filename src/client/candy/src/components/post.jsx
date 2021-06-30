import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import blue from '@material-ui/core/colors/blue';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import PropTypes from 'prop-types';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
    margin: 'auto auto 1.4em auto',
    backgroundColor: theme.primary,
  },
  avatar: {
    backgroundColor: blue[400],
  },
}));

const Post = (
  {
    url,
    username,
    userImg,
    description,
    likes,
    id,
  },
) => {
  const classes = useStyles();
  const [like, setLike] = useState(false);
  const [likecount, setLikecount] = useState(0);

  const handleClickLike = async () => {
    const liked = like;
    setLike((prevState) => !prevState);
    if (!liked) {
      const res = await axios.get(`http://localhost:3000/post/${id}/like`);
      console.log('res', res);
      if (res) setLikecount((prevState) => prevState + 1);
    } else {
      const res = await axios.get(`http://localhost:3000/post/${id}/dislike`);
      if (res) setLikecount((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setLikecount(likes);
  }, []);

  return (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
                src={userImg}
              >
                R
              </Avatar>
            }
            title={username}
            subheader='planet Earth'
          />
          <CardMedia
            component='img'
            src={url}
          />
          <CardActions>
            <IconButton
              color='primary'
              onClick={handleClickLike}
            >
              {
                like ? <FavoriteIcon /> : <FavoriteBorderIcon />
              }

            </IconButton>
            <IconButton>
              <CommentOutlinedIcon />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography
              variant='subtitle2'
            >
              {likecount.toLocaleString()} likes
            </Typography>
            <Typography
              variant='body1'
              component='p'
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
  );
};

Post.propTypes = {
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
  description: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string,
};

export default Post;
