import React from 'react';
import {
  Route,
} from 'react-router-dom';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import './Auth.css';

const Auth = () => (
  <div className="Auth">
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
  </div>
);

export default Auth;
