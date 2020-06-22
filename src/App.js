import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import styles from './App.module.css';
import Promo from './layout/components/Promo';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/profile">Профиль</Link>
        </li>
        <li>
          <Link to="/settings">Настройки приложения</Link>
        </li>
        <li>
          <Link to="/games">Мини игры</Link>
        </li>
        <li>
          <Link to="/cards">Карточки</Link>
        </li>
        <li>
          <Link to="/dictionary">Словарь</Link>
        </li>
        <li>
          <Link to="/statistics">Статистика</Link>
        </li>
        <li>
          <Link to="/login">Выход</Link>
        </li>
        <li>
          <Link to="/promo">Промо</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/">
        <div>
          <h1>Домашняя страница</h1>
        </div>
      </Route>
      <Route exact path="/profile">
        <div>
          <h1>Профиль</h1>
        </div>
      </Route>
      <Route exact path="/settings">
        <div>
          <h1>Настройки</h1>
        </div>
      </Route>
      <Route exact path="/games">
        <div>
          <h1>Мини игры</h1>
        </div>
      </Route>
      <Route exact path="/cards">
        <div>
          <h1>Карточки</h1>
        </div>
      </Route>
      <Route exact path="/dictionary">
        <div>
          <h1>Словарь</h1>
        </div>
      </Route>
      <Route exact path="/statistics">
        <div>
          <h1>Статистика</h1>
        </div>
      </Route>
      <Route exact path="/login">
        <div>
          <h1>Страница авторизации</h1>
        </div>
      </Route>
      <Route exact path="/signin">
        <div>
          <h1>Страница регистрации</h1>
        </div>
      </Route>

      <Route exact path="/promo">
        <div>
          <Promo/>
        </div>
      </Route>
    </Switch>
  </Router>
);

export default App;
