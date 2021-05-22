import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  small: {
    width: '80px',
  },
  large: {
    width: '120px',
    height: '120px',
  },
});

const CircularProfile = ({ avatarAlt, avatarLink }) => {
  const classes = useStyles();
  return (<Avatar src={avatarLink} alt={avatarAlt} className={classes.large} / >);
};

CircularProfile.propTypes = {
  avatarLink: PropTypes.string.isRequired,
  avatarAlt: PropTypes.string,
};

export default CircularProfile;
