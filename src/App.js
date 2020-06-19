import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Menu from './layout/components/Menu/Menu';
import styles from './App.module.css';

const App = () => (
  <Router>
    <Menu />
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
    </Switch>
  </Router>
);

export default App;
