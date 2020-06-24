import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from './auth/redux/selectors';
import Login from './auth/components/Login';
import Signup from './auth/components/Signup';
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
    component: <Login />,
  },
  {
    title: 'Страница регистрации',
    path: '/signup',
    component: <Signup />,
  },
  {
    title: 'Стартовая страница',
    path: '/',
  },
  {
    title: 'Главная страница',
    path: '/',
    component: <Main />,
  },
];

function createRoute({ title, path, component }, isLogged) {
  return (
    <Route key={title} exact path={path}>
      {!isLogged && <Redirect to="/login" />}
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
  component: PropTypes.func.isRequired,
};

const App = () => {
  const isLogged = useSelector(isAuthenticatedSelector);
  return (
    <Router>
      <Menu />
      <Switch>
        {routes.map((el) => createRoute(el, isLogged))}
      </Switch>
    </Router>
  );
};
export default App;
