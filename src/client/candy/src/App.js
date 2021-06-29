import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { orange, deepOrange } from '@material-ui/core/colors';
import Profile from './pages/profile.jsx';
import Home from './pages/home.jsx';
import NavigationBar from './components/navigation.jsx';

let theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: deepOrange,
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [followings, setFollowings] = useState({});
  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(async () => {
    const res = await axios.get('http://localhost:3000/user/followings');
    const obj = {};
    res.data.forEach((item) => {
      obj[item.username] = true;
    });
    setFollowings(obj);
    console.log(obj);
  }, []);

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
  //   return <Home />;
  // }
  // return (
  //   <div className="App">
  //     <Authentication setIsAuthenticated={setIsAuthenticated}/>
  //   </div>
  // );
  // console.log(isAuthenticated);
  return (
  <ThemeProvider theme={theme} >
    <Switch>
      <Route path='/user'>
        <Profile />
      </Route>
      {/* <Route path ='/auth'>
        <Authentication setIsAuthenticated={setIsAuthenticated} />
      </Route> */}
      <Route path='/'>
        <Home followings={followings} />
      </Route>
    </Switch>
    <NavigationBar />
  </ThemeProvider>);
}

export default App;
