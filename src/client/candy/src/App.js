import './App.css';
import React from 'react';
// import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import Profile from './pages/profile.jsx';
import Home from './pages/home.jsx';
import NavigationBar from './components/navigation.component';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);

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
        <Home />
      </Route>
    </Switch>
    <NavigationBar />
  </ThemeProvider>);
}

export default App;
