import React, { useState } from 'react';
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
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '350px',
    margin: 'auto',
    backgroundColor: theme.primary,
  },
  avatar: {
    backgroundColor: blue[400],
  },
}));

export default function Post() {
  const classes = useStyles();
  const [like, setLike] = useState(false);
  return (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
              >
                R
              </Avatar>
            }
            title='kirito'
            subheader='planet Earth'
          />
          <CardMedia
            component='img'
            src='https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          />
          <CardActions>
            <IconButton
              color='primary'
              onClick={ () => setLike(!like)}
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
              variant='body1'
              component='p'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
              consequuntur! Voluptatem et neque, dolor voluptate suscipit molestiae
              asperiores harum officia consequatur rem cumque voluptas voluptatibus.
              Incidunt, adipisci. Ex, possimus molestias?
            </Typography>
          </CardContent>
        </Card>
  );
}
