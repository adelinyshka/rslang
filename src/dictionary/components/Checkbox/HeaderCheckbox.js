import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectWords, setAllSelected } from '../../redux';
import {
  isAllSelectedSelector,
} from '../../redux/selectors';
import styles from './Checkbox.module.css';

const Checkbox = ({
  id, words,
}) => {
  const dispatch = useDispatch();
  const isAllSelected = useSelector(isAllSelectedSelector);
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback((event) => {
    setChecked(event.target.checked);
    dispatch(setAllSelected((event.target.checked)));
  }, [setChecked, dispatch]);

  useEffect(() => {
    const newSelected = {};
    words.forEach((el) => { newSelected[el] = isAllSelected; });
    dispatch(selectWords(newSelected));
  }, [dispatch, isAllSelected, words]);

  return (
    <label className={styles.CheckboxContainer} htmlFor={id}>
      <input
        type="checkbox"
        checked={checked && isAllSelected}
        onChange={handleChange}
        id={id}
      />
      <span className={styles.Checkmark} />
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  words: PropTypes.array.isRequired,
};

export default Checkbox;
