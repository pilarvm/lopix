import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Dashboard from './views/Dashboard'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/dashboard' component={Dashboard}/>
    </BrowserRouter>
  );
}

export default App;
