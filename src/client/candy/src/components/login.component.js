import React from 'react';

const Login = () => (
    <div>
        <form >
            <div>
                <label htmlFor="email">Email</label>
                <input name='email' type='email' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name='password' type='password' />
            </div>
            <button>Login</button>
        </form>
    </div>
);

export default Login;
