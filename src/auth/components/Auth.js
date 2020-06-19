import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './login/login';
import Signin from './login/signin';
import startPage from './login/startPage';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from './App';
import reducers from './reducers';
import './Auth.css';


const history = createBrowserHistory();
const store = createStore(
  reducers,
);

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

function Auth() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={startPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default Auth;
