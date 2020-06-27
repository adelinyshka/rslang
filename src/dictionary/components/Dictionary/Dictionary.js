import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../../auth/redux/selectors';

import { setUserWords } from '../../redux/index';
import { userWordsSelector } from '../../redux/selectors';
import useFetch from '../../../common/utils';
import Table from '../Table/Table';
import styles from './Dictionary.module.css';

const Dictionary = () => {
  const dispatch = useDispatch();
  const userWords = useSelector(userWordsSelector);
  const { userId } = useSelector(userSelector);

  const options = useMemo(() => ({
    method: 'GET',
  }), []);

  const userWordsURL = useMemo(() => `users/${userId}/words/`, [userId]);

  const action = useCallback(
    (data) => dispatch(setUserWords(data)), [dispatch],
  );

  useFetch(userWordsURL, options, action);

  return (
    <div className={styles.Dictionary}>
      <h1>Словарь</h1>
      <div>
        <button type="button">Изучаемые</button>
        <button type="button">Сложные</button>
        <button type="button">Удаленные</button>
      </div>
      {userWords && <Table userWords={userWords} />}
    </div>
  );
};
export default Dictionary;
