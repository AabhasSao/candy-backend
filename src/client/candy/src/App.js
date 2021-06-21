import './App.css';
import React from 'react';
// import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Profile from './pages/profile.jsx';
import Home from './pages/home.jsx';
import NavigationBar from './components/navigation.component';

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
  <>
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
  </>);
}

export default App;
