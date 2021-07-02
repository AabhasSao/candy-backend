import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import axios from 'axios';

const SignUp = ({ setShowlogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/signup', {
      email,
      username,
      password,
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input name='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input name='username' type='text' onChange={(e) => setUsername(e.target.value)}/>
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
            Signup
        </Button>
        <FormGroup>
          <Link onClick={() => setShowlogin(true)} >
            <Typography
              color='primary'
            >
              Already have an account
            </Typography>
          </Link>
        </FormGroup>
      </form>
    </div>);
};

SignUp.propTypes = {
  setShowlogin: PropTypes.func,
};

export default SignUp;
