import React, {
  useMemo, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';

import LearningSection from './LearningSection';
import WordCard from '../WordCard/WordCard';
import useAPI from '../../../common/utils';
import Checkbox from '../Checkbox/Checkbox';
import WordRemoval from '../WordRemoval/WordRemoval';
import styles from './TableItem.module.css';

const fetchOptions = {
  method: 'GET',
};

const TableItem = ({ userWord, section }) => {
  const { _id, difficulty } = useMemo(() => userWord, [userWord]);
  const progressStatus = useMemo(() => 5, []); // получаем из userWord

  const [wordInfo, setWordInfo] = useState({}); // из API
  const [isCardVisible, setIsCardsVisible] = useState(false);

  const content = useMemo(() => {
    switch (section) {
      case 'learning':
        return <LearningSection progressStatus={progressStatus} />;
      default:
        return null;
    }
  }, [progressStatus, section]);

  const { audio, word, wordTranslate } = useMemo(() => wordInfo, [wordInfo]);

  const wordUrl = useMemo(() => `words/${_id}`, [_id]);
  const action = useCallback((data) => setWordInfo(data), [setWordInfo]);

  useAPI(wordUrl, fetchOptions, action);

  const playAudio = useCallback(() => {
    new Audio('https://raw.githubusercontent.com/alekchaik/'
    + `rslang-data/master/${audio}`).play();
  }, [audio]);

  const handleCardClick = useCallback((event) => {
    const { tagName } = event.target;
    if (tagName !== 'DIV') return;
    setIsCardsVisible(true);
  }, []);

  const handleModal = useCallback(() => {
    setIsCardsVisible(false);
  }, []);

  if (!word) return null;

  return (
    <div className={styles.TableItem}>
      <div className={styles.Word} onClick={handleCardClick}>
        <Checkbox wordId={_id} />
        <div onClick={playAudio}>
          <img src="/assets/images/common/speakerOnIcon.svg" alt="play word" />
        </div>
        <div>{word}</div>
        <div>{wordTranslate}</div>
      </div>
      {content}
      <WordRemoval wordId={_id} difficulty={difficulty} />
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
