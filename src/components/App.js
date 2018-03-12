import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import { Quiz } from './Quiz';
import { Results } from './Results';

const App = (props) => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/quiz' component={Quiz}/>
    <Route path='/results' component={Results}/>
  </Switch>
)

export default App;
