import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Public/Home/Home'
import Terms from './views/Public/Terms/Terms'
import Dashboard from './views/Dashboard/Dashboard'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/terms' component={Terms}/>
    </BrowserRouter>
  );
}

export default App;
