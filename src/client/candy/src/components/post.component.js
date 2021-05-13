import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '300px',
    padding: '0 30px',
    margin: '0 auto 2em auto',
  },
});

export default function Post() {
  const classes = useStyles();
  return (
        <Container className={classes.root} maxWidth='xs' >
            <Paper elevation={3} className={classes.root} >
                <div>
                    <img src='#' alt='d' />
                    <p>username</p>
                </div>
                <div>
                    <img src='#' alt='d' />
                </div>
                <div>description</div>
            </Paper>
        </Container>
  );
}
