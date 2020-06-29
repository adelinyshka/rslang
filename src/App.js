import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cards from './cards/components/Cards/Cards';
import { isAuthenticatedSelector } from './auth/redux/selectors';
import Login from './auth/components/Login';
import Signup from './auth/components/Signup';
import Menu from './layout/components/Menu/Menu';
import About from './layout/components/About/About';
import styles from './App.module.css';
import Main from './layout/components/Main/Main';
import Memory from './games/memory/components/Memory';

const authRoutes = [
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
];

function createAuthRoutes({ title, path, component }) {
  return (
    <Route key={title} exact path={path}>
      {component}
    </Route>
  );
}

createAuthRoutes.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

const privateRoutes = [
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
    component: <Cards />,
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
    title: 'Главная страница',
    path: '/',
    component: <Main />,
  },
  {
    title: 'О команде',
    path: '/about',
    component: <About />,
  },
  {
    title: 'Мемори',
    path: '/games/memory',
    component: <Memory />,
  },
];

function createPrivateRoute({ title, path, component }, isLogged) {
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

createPrivateRoute.propTypes = {
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
        {authRoutes.map(createAuthRoutes)}
        {privateRoutes.map((el) => createPrivateRoute(el, isLogged))}
      </Switch>
    </Router>
  );
};
export default App;
