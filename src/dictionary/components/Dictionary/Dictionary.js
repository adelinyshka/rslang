import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../auth/redux/selectors';

import { setUserWords } from '../../redux/index';
import { userWordsSelector } from '../../redux/selectors';
import useFetch from '../../../common/utils';
import Table from '../Table/Table';
import styles from './Dictionary.module.css';

const Dictionary = () => {
  const { userId } = useSelector(userSelector);
  const userWords = useSelector(userWordsSelector);
  const options = useMemo(() => ({
    method: 'GET',
  }), []);
  const url = useMemo(() => `users/${userId}/words/`, [userId]);
  useFetch(url, options, setUserWords);
  return (
    <div className={styles.Dictionary}>
      <h1>Словарь</h1>
      <div>
        <button type="button">Изучаемые</button>
        <button type="button">Сложные</button>
        <button type="button">Удаленные</button>
      </div>
      {userWords && <Table wordsInfo={userWords} />}
    </div>
  );
};
export default Dictionary;
