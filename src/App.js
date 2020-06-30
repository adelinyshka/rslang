import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
<<<<<<< HEAD
import './App.module.css';
import Speakit from './games/speakit/components/Speakit';

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
        <nav>
          <ul>
            <li>
              <Link to="/audio-calle">Аудиовызов</Link>
            </li>
            <li>
              <Link to="/self-game">Наша игра</Link>
            </li>
            <li>
              <Link to="/shroud">Саванна</Link>
            </li>
            <li>
              <Link to="/speakit">SpeakIt</Link>
            </li>
            <li>
              <Link to="/sprint">Спринт</Link>
            </li>
            <li>
              <Link to="/english-puzzle">English Puzzle</Link>
            </li>
          </ul>
        </nav>
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
      <Route exact path="/audio-calle">
        <div>
          <h1>Аудио вызов</h1>
        </div>
      </Route>
      <Route exact path="/self-game">
        <div>
          <h1>Наша игра</h1>
        </div>
      </Route>
      <Route exact path="/shroud">
        <div>
          <h1>Савана</h1>
        </div>
      </Route>
      <Route exact path="/speakit">
        <Speakit />
      </Route>
      <Route exact path="/sprint">
        <div>
          <h1>Спринт</h1>
        </div>
      </Route>
      <Route exact path="/english-puzzle">
        <div>
          <h1>English Puzzle</h1>
        </div>
      </Route>
    </Switch>
  </Router>
);
=======
import { useSelector } from 'react-redux';
import Cards from './cards/components/Cards/Cards';
import { isAuthenticatedSelector } from './auth/redux/selectors';
import Login from './auth/components/Login';
import Signup from './auth/components/Signup';
import Menu from './layout/components/Menu/Menu';
import About from './layout/components/About/About';
import styles from './App.module.css';
import Main from './layout/components/Main/Main';

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
>>>>>>> develop

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
