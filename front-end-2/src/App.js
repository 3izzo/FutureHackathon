import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './pages/login';
import Main from './pages/main';
import Subjects from './pages/subjects';
import Registeration from './pages/registeration';
import Stats from './pages/stats';
import Test from './pages/test';
import './App.css';

class App extends Component {
  render() {
    return(<Router>
      <div>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/subjects"><Subjects /></Route>
          <Route path="/registeration"><Registeration /></Route>
          <Route path="/stats"><Stats /></Route>
          <Route path="/test"><Test /></Route>
          <Route path="/"><Main /></Route>
        </Switch>
      </div>
    </Router>);
  }
}

export default App;
