import React, {
  useCallback, useMemo, useState, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { customFetch } from '../../../common/utils';
import {
  isAllRecoveredSelector,
  selectedWordsSelector,
} from '../../redux/selectors';
import { userIdSelector, tokenSelector } from '../../../auth/redux/selectors';
import styles from './WordRecovery.module.css';

const WordRecovery = ({ wordId, difficulty, onRecovery }) => {
  const userId = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);
  const isAllRecovered = useSelector(isAllRecoveredSelector);
  const selectedWords = useSelector(selectedWordsSelector);

  const [recovered, setRecovered] = useState();

  const url = useMemo(
    () => `users/${userId}/words/${wordId}`, [userId, wordId],
  );

  const fetchOptions = useMemo(() => ({
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      'difficulty': difficulty,
      'optional': {
        'deleted': false,
        'learning': true,
      },
    }),
  }), [difficulty, token]);

  useEffect(() => {
    if ((isAllRecovered && selectedWords[wordId]) || recovered) {
      customFetch(url, fetchOptions);
      onRecovery(true);
    }
  }, [
    isAllRecovered, recovered, fetchOptions,
    url, selectedWords, wordId, onRecovery,
  ]);

  const handleClick = useCallback((event) => {
    setRecovered(true);
  }, []);

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
