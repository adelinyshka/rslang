import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import classes from './ToolBar.module.css';

// eslint-disable-next-line react/prop-types
function ToolBar({ ClickHandler }) {
  return (
    <div className={classes.ToolbarContainer}>
      <div className={`${classes.Burger} ${classes.Burger3}`}>
        <input
          className={classes.BurgerCheckbox}
          type="checkbox"
          name="burger3"
          id="Burger3"
        />
        {/* насчет этого совсем не уверен + линт ругается */}
        <label htmlFor="Burger3" onClick={ClickHandler}>
          <span className={`${classes.Bar} ${classes.Bar1}`} />
          <span className={`${classes.Bar} ${classes.Bar2}`} />
          <span className={`${classes.Bar} ${classes.Bar3}`} />
        </label>
      </div>
      <Link className={classes.MobileHome} to="/">
        <p className={classes.MobileLogo}>RS Lang</p>
      </Link>
      <div className={classes.FixSticky} />
    </div>
  );
}

export default ToolBar;
