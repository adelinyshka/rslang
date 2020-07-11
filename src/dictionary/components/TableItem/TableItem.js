import React, {
  useMemo, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';

import LearningSection from './LearningSection';
import WordCard from '../WordCard/WordCard';
import Checkbox from '../Checkbox/Checkbox';
import WordRemoval from '../WordRemoval/WordRemoval';
import WordRecovery from '../WordRecovery/WordRecovery';
import styles from './TableItem.module.css';

const TableItem = ({ wordInfo, section }) => {
  const {
    _id, userWord, audio, word, wordTranslate,
  } = useMemo(() => wordInfo, [wordInfo]);

  const [marked, setMarked] = useState(false);

  const [isCardVisible, setIsCardsVisible] = useState(false);

  const content = useMemo(() => {
    switch (section) {
      case 'learning':
        return <LearningSection userWord={userWord} />;
      default:
        return null;
    }
  }, [section, userWord]);

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

  if (marked) return null;

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

      {
        section !== 'learning'
        && (
          <WordRecovery
            wordId={_id}
            userWord={userWord}
            onRecovery={setMarked}
          />
        )
      }

      {
        section !== 'deleted'
        && (
          <WordRemoval
            wordId={_id}
            userWord={userWord}
            onRemoval={setMarked}
          />
        )
      }

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
  wordInfo: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
};

export default TableItem;
