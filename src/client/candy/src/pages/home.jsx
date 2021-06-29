import React from 'react';
import PropTypes from 'prop-types';
import Feed from '../components/feed.component';
import SuggestToFollow from '../components/suggestToFollow.jsx';

const Home = ({ followings }) => (
        <>
            <SuggestToFollow followings={followings} />
            <Feed />
        </>
);

Home.propTypes = {
  followings: PropTypes.object,
};

export default Home;
