import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../../common/utils';
import styles from './TableItem.module.css';

const TableItem = ({ userWord }) => {
  const [wordInfo, setWordInfo] = useState({});
  const { audio, word, wordTranslate } = useMemo(() => wordInfo, [wordInfo]);
  const { wordId } = useMemo(() => userWord, [userWord]);
  const options = useMemo(() => ({
    method: 'GET',
  }), []);
  const wordUrl = useMemo(() => `words/${wordId}`, [wordId]);
  const action = useCallback((data) => setWordInfo(data), [setWordInfo]);

  useFetch(wordUrl, options, action);

  const playAudio = useCallback(() => {
    new Audio('https://raw.githubusercontent.com/alekchaik/'
    + `rslang-data/master/${audio}`).play();
  }, [audio]);

  const progressInt = 5;
  let progressClass = null;
  switch (progressInt) {
    case 5:
      progressClass = 'Blue';
      break;
    case 4:
      progressClass = 'Blue';
      break;
    case 3:
      progressClass = 'Blue';
      break;
    case 2:
      progressClass = 'Blue';
      break;
    case 1:
      progressClass = 'Blue';
      break;
    default:
      progressClass = null;
      break;
  }
  const progress = useMemo(() => Array(5).map((el, index) => (
    <div
      key={`progressPoint${index}`}
      className={index <= progressInt ? progressClass : null}
    />
  )), [progressInt, progressClass]);
  return (
    <div className={styles.TableItem}>
      <div className={styles.Word}>
        <div onClick={playAudio}>Listen</div>
        <div>{word}</div>
        <div>{wordTranslate}</div>
      </div>
      <div>
        Начали изучать
      </div>
      <div>
        Дата следующего изучения
      </div>
      <div>
        Повторов
      </div>
      <div>
        {progress}
      </div>
    </div>
  );
};

TableItem.propTypes = {
  userWord: PropTypes.object.isRequired,
};

export default TableItem;
