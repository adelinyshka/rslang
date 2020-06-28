import React, {
  useMemo, useCallback, useState, useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import { userIdSelector } from '../../../auth/redux/selectors';

import { setUserWords } from '../../redux/index';
import { userWordsSelector } from '../../redux/selectors';
import useFetch from '../../../common/utils';
import Table from '../Table/Table';
import styles from './Dictionary.module.css';

const buttonsInfo = [
  {
    title: 'Изучаемые',
    section: 'learning',
  },
  {
    title: 'Сложные',
    section: 'difficult',
  },
  {
    title: 'Удалённые',
    section: 'deleted',
  },
];

const fetchOptions = {
  method: 'GET',
};

const Dictionary = () => {
  const dispatch = useDispatch();
  const userWords = useSelector(userWordsSelector);
  const userId = useSelector(userIdSelector);
  const [dictionarySection, setDictionarySection] = useState('learning');

  const buttons = useMemo(() => (
    buttonsInfo.map(({ title, section }) => (
      <Button
        variant="light"
        className={section === dictionarySection && styles.Active}
        key={section}
        onClick={() => { setDictionarySection(section); }}
      >
        {title}
      </Button>
    ))
  ), [setDictionarySection, dictionarySection]);

  const userWordsURL = useMemo(() => `users/${userId}/words/`, [userId]);

  const action = useCallback(
    (data) => dispatch(setUserWords(data)), [dispatch],
  );

  useFetch(userWordsURL, fetchOptions, action);

  return (
    <div className={styles.Dictionary}>
      <h1>Словарь</h1>
      <ButtonGroup aria-label="Слова" className={styles.ButtonGroup}>
        {buttons}
      </ButtonGroup>
      {userWords && <Table userWords={userWords} section={dictionarySection} />}
    </div>
  );
};
export default Dictionary;
