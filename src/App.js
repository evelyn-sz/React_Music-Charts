import logo from './logo.svg';
import './App.css';
import React from 'react';
import SongsContainer from './containers/SongsContainer';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <SongsContainer/>
    </div>
  );
}

export default App;
