import React from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import classes from './NavItem.module.css';

const NavItem = ({
  // eslint-disable-next-line react/prop-types
  title, icon, link, ClickHandler,
}) => (
  <li className={classes.Item}>
    <Link className={classes.Link} to={link}>
      <div className={classes.Icon}>
        <img src={`./assets/images/${icon}`} alt="" />
      </div>
      <div className={classes.Label}>{title}</div>
    </Link>
  </li>
);

export default NavItem;
