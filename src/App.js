import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Dashboard from './views/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/dashboard' component={Dashboard}/>
    </BrowserRouter>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <style jsx>{`
        .App{
          background-color: red;
        }
      `}</style>
    </div>
    */
  );
}

export default App;
