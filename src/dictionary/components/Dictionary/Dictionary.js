import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import { userIdSelector } from '../../../auth/redux/selectors';

import { setUserWords } from '../../redux/index';
import { userWordsSelector } from '../../redux/selectors';
import useFetch from '../../../common/utils';
import Table from '../Table/Table';
import styles from './Dictionary.module.css';

const Dictionary = () => {
  const dispatch = useDispatch();
  const userWords = useSelector(userWordsSelector);
  const userId = useSelector(userIdSelector);

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
      <ButtonGroup aria-label="Слова" className={styles.ButtonGroup}>
        <Button variant="light" className={styles.Button}>Изучаемые</Button>
        <Button variant="light" className={styles.Button}>Сложные</Button>
        <Button variant="light" className={styles.Button}>Удаленные</Button>
      </ButtonGroup>
      {userWords && <Table userWords={userWords} />}
    </div>
  );
};
export default Dictionary;
