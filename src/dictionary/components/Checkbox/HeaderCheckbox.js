import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setAllSelected } from '../../redux';
import {
  isAllSelectedSelector,
  isSomeUnSelectedSelector,
  isEveryUnselectedSelector,
} from '../../redux/selectors';
import styles from './Checkbox.module.css';

const Checkbox = ({
  id,
}) => {
  const dispatch = useDispatch();
  const isAllSelected = useSelector(isAllSelectedSelector);
  const isSomeUnselected = useSelector(isSomeUnSelectedSelector);
  const isEveryUnselected = useSelector(isEveryUnselectedSelector);

  const handleChange = useCallback((event) => {
    let isChecked = event.target.checked;
    if (isSomeUnselected && isAllSelected) isChecked = false;
    dispatch(setAllSelected(isChecked));
  }, [dispatch, isSomeUnselected, isAllSelected]);

  useEffect(() => {
    if (isEveryUnselected) dispatch(setAllSelected(false));
  }, [dispatch, isEveryUnselected]);

  return (
    <label className={styles.CheckboxContainer} htmlFor={id}>
      <input
        type="checkbox"
        checked={isAllSelected && !isSomeUnselected}
        onChange={handleChange}
        id={id}
      />
      <span className={styles.Checkmark} />
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Checkbox;
