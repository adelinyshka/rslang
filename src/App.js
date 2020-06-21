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
        <div className={styles.PageName}>
          <h1>Домашняя страница</h1>
        </div>
      </Route>
      <Route exact path="/profile">
        <div className={styles.PageName}>
          <h1>Профиль</h1>
        </div>
      </Route>
      <Route exact path="/settings">
        <div className={styles.PageName}>
          <h1>Настройки</h1>
        </div>
      </Route>
      <Route exact path="/games">
        <div className={styles.PageName}>
          <h1>Мини игры</h1>
        </div>
      </Route>
      <Route exact path="/cards">
        <div className={styles.PageName}>
          <h1>Карточки</h1>
        </div>
      </Route>
      <Route exact path="/dictionary">
        <div className={styles.PageName}>
          <h1>Словарь</h1>
        </div>
      </Route>
      <Route exact path="/statistics">
        <div className={styles.PageName}>
          <h1>Статистика</h1>
        </div>
      </Route>
      <Route exact path="/login">
        <div className={styles.PageName}>
          <h1>Страница авторизации</h1>
        </div>
      </Route>
      <Route exact path="/signin">
        <div className={styles.PageName}>
          <h1>Страница регистрации</h1>
        </div>
      </Route>
    </Switch>
  </Router>
);

export default App;
