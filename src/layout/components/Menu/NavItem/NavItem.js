import React from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import classes from './NavItem.module.css';

const NavItem = ({ title, icon, link }) => ( // eslint-disable-line
  <li className={classes.Item}>
    <Link className={classes.Link} to={link}>
      <div className={classes.Icon}>
        <img src={`./assets/img/${icon}`} alt="" />
      </div>
      <div className={classes.label}>{title}</div>
    </Link>
  </li>
);

export default NavItem;
