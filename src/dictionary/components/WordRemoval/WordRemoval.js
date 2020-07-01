import React, {
  useCallback, useMemo, useState, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { customFetch } from '../../../common/utils';
import {
  isAllDeletedSelector,
  selectedWordsSelector,
} from '../../redux/selectors';
import { userIdSelector, tokenSelector } from '../../../auth/redux/selectors';
import styles from './WordRemoval.module.css';

const WordRemoval = ({ wordId, difficulty }) => {
  const userId = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);
  const isAllDeleted = useSelector(isAllDeletedSelector);
  const selectedWords = useSelector(selectedWordsSelector);

  const [deleted, setDeleted] = useState();

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
        'deleted': true,
      },
    }),
  }), [difficulty, token]);

  useEffect(() => {
    if ((isAllDeleted && selectedWords[wordId]) || deleted) {
      customFetch(url, fetchOptions);
      console.log('123');
    }
  }, [isAllDeleted, deleted, fetchOptions, url, selectedWords, wordId]);

  const handleClick = useCallback((event) => {
    setDeleted(true);
  }, []);

  return (
    <div
      className={styles.DeleteContainer}
      onClick={handleClick}
    >
      <img src="/assets/images/dictionary/deleteIcon.svg" alt="delete word" />
    </div>
  );
};

WordRemoval.propTypes = {
  wordId: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default WordRemoval;
