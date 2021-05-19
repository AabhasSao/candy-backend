import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    }, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      setIsAuthenticated(true);
    }).catch((err) => {
      console.log(err);
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
          <label htmlFor="password">Password</label>
          <input name='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button>Login</button>
        <Link to='/signup'>Create an account</Link>
      </form>
    </div>
  );
};

Login.propTypes = {
  setIsAuthenticated: PropTypes.func,
};

export default Login;
