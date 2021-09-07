import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Login = ({ setIsAuthenticated, setShowlogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('some error occured');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/auth/login',
        { email, password }, { withCredentials: true },
      );
      if (res.status === 200) setIsAuthenticated(true);
    } catch (err) {
      // eslint-disable-next-line no-console
      setMessage(err.response.data.error);
      setOpen(true);
      console.log(message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input name='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <Button
          variant='outlined'
          color='primary'
          type='submit'
        >
            Login
        </Button>
        <FormGroup>
          <Link onClick={() => setShowlogin(false)} >
            <Typography>
              Create an account
            </Typography>
          </Link>
        </FormGroup>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

Login.propTypes = {
  setIsAuthenticated: PropTypes.func,
  setShowlogin: PropTypes.func,
};

export default Login;
