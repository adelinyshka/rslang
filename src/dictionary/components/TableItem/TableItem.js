import React, {
  useMemo, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../../common/utils';
import Checkbox from '../Checkbox/Checkbox';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './TableItem.module.css';

const fetchOptions = {
  method: 'GET',
};

const TableItem = ({ userWord, section, allSelected }) => {
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

  if (!word) return null;

  return (
    <div className={styles.TableItem}>
      <div className={styles.Word}>
        <Checkbox allSelected={allSelected} id={word} />
        <div onClick={playAudio}>Listen</div>
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
      <ProgressBar progressStatus={progressStatus} />
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
  section: PropTypes.string.isRequired,
  allSelected: PropTypes.bool.isRequired,
};

export default TableItem;
