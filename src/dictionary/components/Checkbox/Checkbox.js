import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.module.css';

const Checkbox = ({ allSelected, id, clicked }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(allSelected);
  }, [allSelected]);

  const handleChange = useCallback((event) => {
    setChecked(event.target.checked);
    clicked(event.target.checked);
  }, [setChecked, clicked]);

  return (
    <label className={styles.CheckboxContainer} htmlFor={id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id={id}
      />
      <span className={styles.Checkmark} />
    </label>
  );
};

Checkbox.propTypes = {
  allSelected: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  clicked: PropTypes.func,
};

Checkbox.defaultProps = {
  clicked: () => {},
};

export default Checkbox;
