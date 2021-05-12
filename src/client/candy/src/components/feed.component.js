import { Grid } from '@material-ui/core'
import React from 'react'
import Post from './post.component'

export const Feed = () => {
    return (
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
    )
}
