import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Menu from './layout/components/Menu/Menu';
import styles from './App.module.css';
import Main from './layout/components/Main/Main';

const routes = [
  {
    title: 'Профиль',
    path: '/profile',
  },
  {
    title: 'Настройки',
    path: '/settings',
  },
  {
    title: 'Игры',
    path: '/games',
  },
  {
    title: 'Карточки',
    path: '/cards',
  },
  {
    title: 'Словарь',
    path: '/dictionary',
  },
  {
    title: 'Статистика',
    path: '/statistics',
  },
  {
    title: 'Страница авторизации',
    path: '/login',
  },
  {
    title: 'Страница регистрации',
    path: '/signin',
  },
];

function createRoute({ title, path }) {
  return (
    <Route key={title} exact path={path}>
      <div className={styles.PageName}>
        <h1>{title}</h1>
      </div>
    </Route>
  );
}

createRoute.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const App = () => (
  <Router>
    <Menu />
    <Switch>
      <Route exact path="/">
        <Main />
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
