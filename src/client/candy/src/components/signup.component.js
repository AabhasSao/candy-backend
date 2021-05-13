import React from 'react';

const SignUp = () => (
        <div>
            <form >
                <div>
                    <label htmlFor="email">Email</label>
                    <input name='email' type='email' />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input name='username' type='text' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name='password' type='password' />
                </div>
                <button>Signup</button>
            </form>
        </div>
);

export default SignUp;
