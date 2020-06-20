import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import startPage from './Signin/startPage';
import { Signin } from './Signin/Signin';
import Signup from './Signup/Signup';
import './Auth.css';

const history = createBrowserHistory();

function Auth() {
  return (
    <Router>
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
          <Route path="/" component={startPage} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Auth />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

export default Auth;
