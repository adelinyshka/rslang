import React, {
  useMemo, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../ProgressBar/ProgressBar';
import useFetch from '../../../common/utils';
import styles from './TableItem.module.css';

const fetchOptions = {
  method: 'GET',
};

const TableItem = ({ userWord }) => {
  const [wordInfo, setWordInfo] = useState({});
  const { audio, word, wordTranslate } = useMemo(() => wordInfo, [wordInfo]);
  const { wordId } = useMemo(() => userWord, [userWord]);
  const progressStatus = useMemo(() => 5, []); // получаем из wordInfo

  const wordUrl = useMemo(() => `words/${wordId}`, [wordId]);
  const action = useCallback((data) => setWordInfo(data), [setWordInfo]);

  useFetch(wordUrl, fetchOptions, action);

  const playAudio = useCallback(() => {
    new Audio('https://raw.githubusercontent.com/alekchaik/'
    + `rslang-data/master/${audio}`).play();
  }, [audio]);

  return (
    <div className={styles.TableItem}>
      <div className={styles.Word}>
        <input type="checkbox" />
        <div onClick={playAudio}>Listen (картинка)</div>
        <div>{word}</div>
        <div>{wordTranslate}</div>
      </div>
      <div>
        01.09
      </div>
      <div>
        16.09
      </div>
      <div>
        5
      </div>
      <div>
        <ProgressBar progressStatus={progressStatus} />
      </div>
      <div>
        <img
          src="./assets/images/dictionary/deleteIcon.svg"
          alt="delete word"
        />
      </div>
    </div>
  );
};

TableItem.propTypes = {
  userWord: PropTypes.object.isRequired,
};

export default TableItem;
