import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './NavItem.module.css';

const NavItem = ({
  title, icon, link,
}) => (
  <li className={classes.Item}>
    <Link className={classes.Link} to={link}>
      <div className={classes.Icon}>
        <img src={`./assets/images/menu/${icon}`} alt="" />
      </div>
      <div className={classes.Label}>{title}</div>
    </Link>
  </li>
);

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
