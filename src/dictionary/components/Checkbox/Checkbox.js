import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectWords } from '../../redux';
import {
  isAllSelectedSelector,
} from '../../redux/selectors';
import styles from './Checkbox.module.css';

const Checkbox = ({ wordId }) => {
  const dispatch = useDispatch();
  const isAllSelected = useSelector(isAllSelectedSelector);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isAllSelected);
  }, [isAllSelected]);

  useEffect(() => {
    dispatch(selectWords({ [wordId]: checked }));
  }, [dispatch, wordId, checked]);

  const handleChange = useCallback((event) => {
    setChecked(event.target.checked);
  }, [setChecked]);

  return (
    <label className={styles.CheckboxContainer} htmlFor={wordId}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id={wordId}
      />
      <span className={styles.Checkmark} />
    </label>
  );
};

Checkbox.propTypes = {
  wordId: PropTypes.string.isRequired,
};

export default Checkbox;
