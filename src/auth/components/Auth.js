import React from 'react';
import {
  Route,
} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import Signup from './Signup/Signup';
import './Auth.css';

const Auth = () => (
  <div className="Auth">
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={Signup} />
  </div>
);

export default Auth;
