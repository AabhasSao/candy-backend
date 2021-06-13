import './App.css';
import React, { useState } from 'react';
// import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Feed from './components/feed.component';
import Authentication from './components/authentication.component';
import Profile from './components/profile.component';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/users', { withCredentials: true })
  //     .then(
  //       (res) => {
  //         if (res.data) {
  //           setIsAuthenticated(true);
  //         }
  //       },
  //     );
  // }, [isAuthenticated]);

  // if (isAuthenticated) {
  //   return (<Switch>

  //   </Switch>);
  // }
  // return (
  //   <div className="App">
  //     <Authentication setIsAuthenticated={setIsAuthenticated}/>
  //   </div>
  // );
  console.log(isAuthenticated);
  return (<Switch>
    <Route path='/user'>
      <Profile />
    </Route>
    <Route path ='/auth'>
      <Authentication setIsAuthenticated={setIsAuthenticated} />
    </Route>
    <Route path='/'>
      <Feed />
    </Route>
  </Switch>);
}

export default App;
