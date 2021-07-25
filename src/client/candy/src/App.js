import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { orange, deepOrange } from '@material-ui/core/colors';
import Profile from './pages/profile.jsx';
import Home from './pages/home.jsx';
import NavigationBar from './components/navigation.jsx';
import Authentication from './components/authentication.jsx';
import FileUploader from './utils/fileUploader.jsx';
import { userRoutes, authRoutes } from './routes/routes';

let theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: deepOrange,
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [followings, setFollowings] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(async () => {
    const auth = await axios.get(authRoutes.root, { withCredentials: true });
    if (auth.status === 200) {
      setIsAuthenticated(true);
    }
    if (isAuthenticated) {
      const res = await axios.get(userRoutes.followings, { withCredentials: true });
      const obj = {};
      res.data.forEach((item) => {
        obj[item.username] = true;
      });
      setFollowings(obj);
    }
  }, [isAuthenticated]);

  return <ThemeProvider theme={theme} >
    {
      (isAuthenticated)
        ? (<>
        <Switch>
          <Route path='/user'>
            <Profile />
          </Route>
          <Route exact={true} path='/'>
            <Home followings={followings} />
          </Route>
        </Switch>
        <Switch path='/upload'>
          <FileUploader />
        </Switch>
        <NavigationBar />
        </>)
        : <Authentication setIsAuthenticated={setIsAuthenticated} />
    }
  </ThemeProvider>;
}

export default App;
