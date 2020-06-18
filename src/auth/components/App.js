import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './login';
import Signin from './signin';
import Success from './success';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/signin" component={ Signin } />
          <Route path="/" component={ Success } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
