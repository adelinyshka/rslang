import React, {
  useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import useAPI from '../../../common/utils';

import {
  isAllDeletedSelector,
  selectedWordsSelector,
} from '../../redux/selectors';
import { userIdSelector } from '../../../auth/redux/selectors';

import styles from './WordRemoval.module.css';

const WordRemoval = ({ wordId, userWord, onRemoval }) => {
  const userId = useSelector(userIdSelector);
  const isAllDeleted = useSelector(isAllDeletedSelector);
  const selectedWords = useSelector(selectedWordsSelector);

  const [deleted, setDeleted] = useState(false);

  const url = useMemo(
    () => `users/${userId}/words/${wordId}`, [userId, wordId],
  );

  const fetchOptions = useMemo(() => ({
    method: 'PUT',
    body: JSON.stringify({
      ...userWord,
      'optional': {
        ...userWord.optional,
        'deleted': true,
        'learning': false,
        'difficult': false,
      },
    }),
  }), [userWord]);

  // условие для отправки запроса
  const condition = useMemo(
    () => (isAllDeleted && selectedWords[wordId]) || deleted,
    [isAllDeleted, deleted, selectedWords, wordId],
  );

  // действие после запроса, setTimeout для предотвращения утечки памяти
  const action = useCallback(
    () => setTimeout(() => onRemoval(true)), [onRemoval],
  );

  const handleClick = useCallback((event) => {
    setDeleted(true);
  }, []);

  // запрос, возвращающий слово в раздел "изучаемые"
  useAPI(url, fetchOptions, action, condition);

  return (
    <div
      className={styles.RecoveryContainer}
      onClick={handleClick}
    >
      <img
        src="/assets/images/dictionary/deleteIcon.svg"
        alt="recover word"
      />
    </div>
  );
};

WordRemoval.propTypes = {
  wordId: PropTypes.string.isRequired,
  userWord: PropTypes.object.isRequired,
  onRemoval: PropTypes.func.isRequired,
};

export default WordRemoval;
