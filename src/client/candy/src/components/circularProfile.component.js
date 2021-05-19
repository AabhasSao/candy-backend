import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

const CircularProfile = ({ avatarAlt, avatarLink }) => (
    <Avatar src={avatarLink} alt={avatarAlt} / >
);

CircularProfile.propTypes = {
  avatarLink: PropTypes.string.isRequired,
  avatarAlt: PropTypes.string,
};

export default CircularProfile;
