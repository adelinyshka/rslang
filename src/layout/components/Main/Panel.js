import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';

export default function Panel({
  img, header, description, actionName, alt, myStyle, children,
}) {
  return (
    <div className={styles.Block}>
      <img
        src={ img }
        alt={alt}
      />
      <h2>{ header }</h2>
      <p className={ myStyle }>
        { description }
      </p>
      <button
        className={styles.Btn}
        type="button"
        disableelevation="true"
      >
        {actionName}
      </button>
      {children}
    </div>
  );
}

Panel.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actionName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  myStyle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Panel.defaultProps = {
  myStyle: '',
  children: null,
};
