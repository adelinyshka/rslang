import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavItem.module.css';

const NavItem = ({
  icon, alt, clicked,
}) => (
  <div className={styles.NavItem} role="button" onClick={clicked} tabIndex={0}>
    <img
      className={styles.Icon}
      src={`./assets/images/cards/${icon}`}
      alt={alt}
    />
    <div className={styles.Description}>
      {alt}
    </div>
  </div>
);

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default NavItem;
