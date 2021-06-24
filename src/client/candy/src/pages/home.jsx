import React from 'react';
import Feed from '../components/feed.component';
import SuggestToFollow from '../components/suggestToFollow.jsx';

const Home = () => (
        <>
            <SuggestToFollow />
            <Feed />
        </>
);

export default Home;
