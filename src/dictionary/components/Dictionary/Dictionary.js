import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../../auth/redux/selectors';
// import { createUserWord, getUserWords } from '../../utils';
import fetchData from '../../../common/utils';
import Table from '../Table/Table';
import styles from './Dictionary.module.css';

const Dictionary = () => {
  const { token, userId } = useSelector(userSelector);
  const getUserWords = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
    url: `users/${userId}/words/`,
  };
  useEffect(() => fetchData(getUserWords), [getUserWords]);

  return (
    <div className={styles.Dictionary}>
      <h1>Словарь</h1>
      <div>
        <button type="button">Изучаемые</button>
        <button type="button">Сложные</button>
        <button type="button">Удаленные</button>
      </div>
      <Table />
    </div>
  );
};
export default Dictionary;
