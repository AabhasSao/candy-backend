import './App.css';
import React, { useState } from 'react';
import Feed from './components/feed.component';
import SignUp from './components/signup.component';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  if (isAuthenticated) {
    return (<div className='App'>
      <Feed />
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>Change authenticity</button>
    </div>);
  }
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
