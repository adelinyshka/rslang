import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../../auth/redux';
import { emailSelector } from '../../../auth/redux/selectors';
import NavItem from './NavItem/NavItem';
import ToolBar from './ToolBar/ToolBar';

import classes from './Menu.module.css';

function Menu() {
  const [position, toggle] = useState(false);
  const email = useSelector(emailSelector);
  const dispatch = useDispatch();
  return (
    <>
      <ToolBar ClickHandler={() => toggle(!position)} />
      <div className={classNames(classes.MenuContainer,
        { [classes.Active]: position })}
      >
        <p className={classes.LogoBlue}>Lang</p>
        <div className={classes.Menu}>
          <div className={classes.FlexContainer}>
            <div>
              <div className={classes.Header}>
                <Link className={classes.Home} to="/main">
                  <p className={classes.Logo}>RS</p>
                  <p className={classes.LogoWhite}>Lang</p>
                </Link>
              </div>
              <ul className={classes.NavList}>
                <li className={classes.UserLogin}>
                  <div className={classes.UserLoginInner}>
                    <div className={classes.UserLoginIcon}>
                      <img src="/assets/images/menu/profile.svg" alt="" />
                    </div>
                    <div className={classes.UserLoginLabel}>{email}</div>
                  </div>
                </li>
                <NavItem title="Профиль" icon="settings.svg" link="/profile" />
                <NavItem title="Настройки" icon="filter.svg" link="/settings" />
                <NavItem title="Мини игры" icon="london.svg" link="/games" />
                <NavItem title="Карточки" icon="action.svg" link="/cards" />
                <NavItem title="Словарь" icon="search.svg" link="/dictionary" />
                <NavItem
                  title="Статистика"
                  icon="clock.svg"
                  link="/statistics"
                />
                <NavItem
                  title="Выход"
                  icon="path.svg"
                  link="/"
                  clicked={() => dispatch(logout())}
                />
              </ul>
            </div>
            <div className={classNames(classes.BlackTheme,
              classes.HideBlackThemeToggle)}
            >
              <div className={classes.BlackThemeInner}>
                <div className={classes.BlackThemeIcon}>
                  <img
                    className={classes.BlackThemeImg}
                    src="./assets/images/moon.svg"
                    alt=""
                  />
                </div>
                <div className={classes.BlackThemeLabel}>Темная тема</div>
                <div className={classes.Card}>
                  <label
                    htmlFor={classes.ToggleTheme}
                    className={classes.ToggleThemeLabel}
                  >
                    <input id="ToggleTheme" type="checkbox" />
                    <span className={classes.Switch} />
                    <span className={classes.Toggle}> </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
