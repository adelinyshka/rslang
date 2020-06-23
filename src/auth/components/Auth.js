import React from 'react';
import {
  Route,
} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import './Auth.css';

const Auth = () => (
  <div className="Auth">
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </div>
);

export default Auth;
