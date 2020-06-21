import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import './Auth.css';

const Auth = () => (
  <div>
    <div className="Auth">
      <div className="line" />
      <header className="Auth-header">
        <h1>
              RS
          <span className="header-blue">Lang</span>
        </h1>
      </header>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  </div>
);

export default Auth;
