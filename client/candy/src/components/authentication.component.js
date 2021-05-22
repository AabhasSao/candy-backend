import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './login.component';
import SignUp from './signup.component';

const Authentication = ({ setIsAuthenticated }) => {
  const history = useHistory();

  // show login component by default in authentication component
  useEffect(() => {
    history.push('/login');
  }, []);

  return (<Switch>
    <Route path='/signup'>
      <SignUp/>
    </Route>
    <Route path='/login'>
      <Login setIsAuthenticated={setIsAuthenticated}/>
    </Route>
  </Switch>);
};

Authentication.propTypes = {
  setIsAuthenticated: PropTypes.func,
};

export default Authentication;
