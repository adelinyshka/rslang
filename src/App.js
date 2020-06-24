import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Menu from './layout/components/Menu/Menu';
import About from './layout/components/About/About';
import styles from './App.module.css';

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
  {
    title: 'О команде',
    path: '/about',
    component: <About />,
  },
];

function createRoute({ title, path, component }) {
  return (
    <Route key={title} exact path={path}>
      {component || (
        <div className={styles.PageName}>
          <h1>{title}</h1>
        </div>
      )}
    </Route>
  );
}

createRoute.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};

const App = () => (
  <Router>
    <Menu />
    <Switch>
      {routes.map(createRoute)}
    </Switch>
  </Router>
);
export default App;
