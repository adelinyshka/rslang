import React, {
  useMemo, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';

import WordCard from '../WordCard/WordCard';
import useFetch from '../../../common/utils';
import Checkbox from '../Checkbox/Checkbox';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './TableItem.module.css';

const fetchOptions = {
  method: 'GET',
};

const TableItem = ({ userWord, section }) => {
  const { wordId } = useMemo(() => userWord, [userWord]);
  const progressStatus = useMemo(() => 5, []); // получаем из userWord
  const [wordInfo, setWordInfo] = useState({}); // из API
  const [isCardVisible, setIsCardsVisible] = useState(false);
  const { audio, word, wordTranslate } = useMemo(() => wordInfo, [wordInfo]);

  const wordUrl = useMemo(() => `words/${wordId}`, [wordId]);
  const action = useCallback((data) => setWordInfo(data), [setWordInfo]);
  useFetch(wordUrl, fetchOptions, action);

  const playAudio = useCallback(() => {
    new Audio('https://raw.githubusercontent.com/alekchaik/'
    + `rslang-data/master/${audio}`).play();
  }, [audio]);

  const handleCardClick = useCallback((event) => {
    if (event.target.tagName === 'IMG') return;
    setIsCardsVisible(true);
  }, []);

  const handleModal = useCallback(() => {
    setIsCardsVisible(false);
  }, []);

  if (!word) return null;

  return (
    <div className={styles.TableItem}>
      <div className={styles.Word} onClick={handleCardClick}>
        <Checkbox wordId={wordId} />
        <div onClick={playAudio}>
          <img src="/assets/images/common/speakerOnIcon.svg" alt="play word" />
        </div>
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
      {isCardVisible
      && (
        <WordCard
          wordInfo={wordInfo}
          onHide={handleModal}
          playAudio={playAudio}
        />
      )}
    </div>

  );
};

TableItem.propTypes = {
  userWord: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
};

export default TableItem;
