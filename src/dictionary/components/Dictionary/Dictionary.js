import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../../auth/redux/selectors';

import { setUserWords } from '../../redux/index';
import { userWordsSelector } from '../../redux/selectors';
import useFetch from '../../../common/utils';
import Table from '../Table/Table';
import styles from './Dictionary.module.css';

const Dictionary = () => {
  const dispatch = useDispatch();
  const { userId, token } = useSelector(userSelector);
  const userWords = useSelector(userWordsSelector);
  const options = useMemo(() => ({
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }), [token]);
  const { response, error } = useFetch(`users/${userId}/words/`, options);

  useEffect(() => {
    if (!error) dispatch(setUserWords(response));
  });

  return (
    <div className={styles.Dictionary}>
      <h1>Словарь</h1>
      <div>
        <button type="button">Изучаемые</button>
        <button type="button">Сложные</button>
        <button type="button">Удаленные</button>
      </div>
      {/* {userWords && <Table wordsInfo={userWords} />} */}
    </div>
  );
};
export default Dictionary;
