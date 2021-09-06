import React from 'react';
import PropTypes from 'prop-types';
import Feed from '../components/feed.jsx';
// import SuggestToFollow from '../components/suggestToFollow.jsx';

// const Home = ({ followings }) => (
const Home = () => (
        <>
            {/* <SuggestToFollow followings={followings} /> */}
            <Feed />
        </>
);

Home.propTypes = {
  followings: PropTypes.object,
};

export default Home;
