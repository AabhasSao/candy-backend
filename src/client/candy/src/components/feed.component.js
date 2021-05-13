import React from 'react';
import Grid from '@material-ui/core/Grid';
import Post from './post.component';

const Feed = () => (
        <div>
            <Grid
                container
                spacing={1}
                direction="row"
                >
                <Grid item lg={4} md={6} sm={12} xs={12} >
                    <Post />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} >
                    <Post />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12} >
                    <Post />
                </Grid>
            </Grid>
        </div>
);

export default Feed;
