import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavItem.module.css';

const NavItem = ({
  icon, alt, clicked, hintsDisplay,
}) => (
  <div className={styles.NavItem} role="button" onClick={clicked} tabIndex={0}>
    <img
      className={styles.Icon}
      src={`./assets/images/cards/${icon}`}
      alt={alt}
    />
    {hintsDisplay
    && (
      <div className={styles.Description}>
        {alt}
      </div>
    )}
  </div>
);

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  hintsDisplay: PropTypes.bool.isRequired,
};

export default NavItem;
