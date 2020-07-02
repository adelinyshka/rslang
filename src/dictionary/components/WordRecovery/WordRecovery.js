import React, {
  useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import useAPI from '../../../common/utils';

import {
  isAllRecoveredSelector,
  selectedWordsSelector,
} from '../../redux/selectors';
import { userIdSelector } from '../../../auth/redux/selectors';

import styles from './WordRecovery.module.css';

const WordRecovery = ({ wordId, difficulty, onRecovery }) => {
  const userId = useSelector(userIdSelector);
  const isAllRecovered = useSelector(isAllRecoveredSelector);
  const selectedWords = useSelector(selectedWordsSelector);

  const [recovered, setRecovered] = useState(false);

  const url = useMemo(
    () => `users/${userId}/words/${wordId}`, [userId, wordId],
  );

  const fetchOptions = useMemo(() => ({
    method: 'PUT',
    body: JSON.stringify({
      'difficulty': difficulty,
      'optional': {
        'deleted': false,
        'learning': true,
      },
    }),
  }), [difficulty]);

  // условие для отправки запроса
  const condition = useMemo(
    () => (isAllRecovered && selectedWords[wordId]) || recovered,
    [isAllRecovered, recovered, selectedWords, wordId],
  );

  // действие после запроса, setTimeout для предотвращения утечки памяти
  const action = useCallback(
    () => setTimeout(() => onRecovery(true)), [onRecovery],
  );

  const handleClick = useCallback((event) => {
    setRecovered(true);
  }, []);

  // запрос, возвращающий слово в раздел "изучаемые"
  useAPI(url, fetchOptions, action, condition);

  return (
    <div
      className={styles.RecoveryContainer}
      onClick={handleClick}
    >
      <img
        src="/assets/images/dictionary/recoveryIcon.svg"
        alt="recover word"
      />
    </div>
  );
};

WordRecovery.propTypes = {
  wordId: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  onRecovery: PropTypes.func.isRequired,
};

export default WordRecovery;
