import React, {
  useMemo, useCallback, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import useAPI from '../../../common/utils';

import { resetState, setUserWords } from '../../redux/index';

import { userIdSelector } from '../../../auth/redux/selectors';

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
  const userId = useSelector(userIdSelector);
  const [dictionarySection, setDictionarySection] = useState('learning');

  const userWordsURL = useMemo(
    // eslint-disable-next-line max-len
    () => `users/${userId}/aggregatedWords?wordsPerPage=10000&filter={"userWord.optional.${dictionarySection}":true}`, [userId, dictionarySection],
  );

  const action = useCallback(
    (data) => dispatch(setUserWords(data[0].paginatedResults)), [dispatch],
  );

  const buttons = useMemo(() => (
    buttonsInfo.map(({ title, section }) => (
      <Button
        variant="light"
        className={section === dictionarySection && styles.Active}
        key={section}
        onClick={() => {
          dispatch(resetState());
          setDictionarySection(section);
        }}
      >
        {title}
      </Button>
    ))
  ), [setDictionarySection, dictionarySection, dispatch]);

  useAPI(userWordsURL, fetchOptions, action);

  return (
    <div className={styles.Dictionary}>
      <h1>Словарь</h1>
      <ButtonGroup aria-label="Слова" className={styles.ButtonGroup}>
        {buttons}
      </ButtonGroup>
      <Table section={dictionarySection} />
    </div>
  );
};
export default Dictionary;
