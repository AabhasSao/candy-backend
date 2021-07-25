import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Login from './login.jsx';
import SignUp from './signup.jsx';

const useStyles = makeStyles({
  root: {
    width: '80vw',
    margin: 'auto',
    padding: '3em',

  },
});

const Authentication = ({ setIsAuthenticated }) => {
  const [showlogin, setShowlogin] = useState(true);
  const classes = useStyles();
  return <Card className={classes.root}>
    {
      (showlogin)
        ? <Login
          setShowlogin={setShowlogin}
          setIsAuthenticated={setIsAuthenticated}
        />
        : <SignUp setShowlogin={setShowlogin} />
    }
 </Card>;
};

Authentication.propTypes = {
  setIsAuthenticated: PropTypes.func,
};

export default Authentication;
