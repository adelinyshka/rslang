import React from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import ToolBar from './ToolBar/ToolBar';

import classes from './Menu.module.css';

const Menu = () => (
  <div>
    <ToolBar />
    <div className={classes.MenuContainer}>
      <p className={classes.LogoBlue}>Lang</p>
      <div className={classes.Menu}>
        <div className={classes.HeaderMenu}>
          <Link className={classes.Home} to="/">
            <p className={classes.Logo}>RS</p>
            <p className={classes.LogoWhite}>Lang</p>
          </Link>
        </div>
        <nav>
          <ul>
            <NavItem title="user_login" icon="profile.svg" />
            <NavItem title="Профиль" icon="settings.svg" link="/profile" />
            <NavItem title="Настройки приложения" icon="filter.svg" link="/settings" />
            <NavItem title="Мини игры" icon="london.svg" link="/games" />
            <NavItem title="Карточки" icon="action.svg" link="/cards" />
            <NavItem title="Словарь" icon="search.svg" link="/dictionary" />
            <NavItem title="Статистика" icon="clock.svg" link="/statistics" />
            <NavItem title="Выход" icon="path.svg" link="/login" />
            <NavItem title="Темная тема" icon="moon.svg" />
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Menu;
