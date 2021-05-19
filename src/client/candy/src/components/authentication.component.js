import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Login from './login.component';
import SignUp from './signup.component';

const Authentication = ({ setIsAuthenticated }) => (
  // <Login setIsAuthenticated={setIsAuthenticated} />
  <Switch>
    <Route path='/signup'>
      <SignUp/>
    </Route>
    <Route path='/login'>
      <Login setIsAuthenticated={setIsAuthenticated}/>
    </Route>
  </Switch>
);

Authentication.propTypes = {
  setIsAuthenticated: PropTypes.func,
};

export default Authentication;
