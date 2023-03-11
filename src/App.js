import './App.css';
import React from 'react';
import Navbar from './Navabar';
import Home from './Home';
import Create from './Create';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
     <div className="content">
        <Home />
     </div>
    </div>
  );
}

export default App;
