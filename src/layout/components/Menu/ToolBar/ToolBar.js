import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './ToolBar.module.css';

function ToolBar({ ClickHandler }) {
  return (
    <div className={classes.ToolbarContainer}>
      <div className={classNames(classes.Burger, classes.Burger3)}>
        <input
          className={classes.BurgerCheckbox}
          type="checkbox"
          name="burger3"
          id="Burger3"
        />
        <label htmlFor="Burger3" onClick={ClickHandler}>
          <span className={classNames(classes.Bar, classes.Bar1)} />
          <span className={classNames(classes.Bar, classes.Bar2)} />
          <span className={classNames(classes.Bar, classes.Bar3)} />
        </label>
      </div>
      <Link className={classes.MobileHome} to="/">
        <p className={classes.MobileLogo}>RS Lang</p>
      </Link>
      <div className={classes.FixSticky} />
    </div>
  );
}

ToolBar.propTypes = {
  ClickHandler: PropTypes.func.isRequired,
};

export default ToolBar;
