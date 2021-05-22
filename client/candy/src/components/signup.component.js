import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
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
        <button>Signup</button>
        <Link to='/login'>Already have an account</Link>
      </form>
    </div>);
};

export default SignUp;
