// src/App.js
import React from 'react';
import './App.css';
import logo from './logo.svg'; // Make sure this line is included if you're using the logo.
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Use logo here */}
        <h1>Training Management Application</h1>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
