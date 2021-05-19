import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from './components/feed.component';
import Authentication from './components/authentication.component';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/users', { withCredentials: true })
      .then(
        (res) => {
          if (res.data) {
            setIsAuthenticated(true);
          }
        },
      );
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (<div className='App'>
      <Feed/>
    </div>);
  }
  return (
    <div className="App">
      <Authentication setIsAuthenticated={setIsAuthenticated}/>
    </div>
  );
}

export default App;
