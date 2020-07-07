/* eslint-disable max-len */
import React, { useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from './WordCard.module.css';

const WordCard = ({ wordInfo, onHide, playAudio }) => {
  const {
    word, wordTranslate, image, transcription, textMeaningTranslate, textExample,
  } = useMemo(() => wordInfo, [wordInfo]);

  const exampleWord = useMemo(
    () => textExample.match(/<b>([\w]{0,})<\/b>/)[1], [textExample],
  );

  const exampleSentence = useMemo(() => {
    const wordlessText = textExample.split(/<b>[\w]{0,}<\/b>/);
    return wordlessText.join(` ${exampleWord} `);
  }, [textExample, exampleWord]);
  return (
    <Modal
      className={styles.Card}
      show
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      closeButton
    >
      <Modal.Header closeButton>
        <div className={styles.CardHeader}>
          <img
            className={styles.HeaderImg}
            src={`https://raw.githubusercontent.com/alekchaik/rslang-data/master/${image}`}
            alt={word}
          />
          <p>{word}</p>
          <div className={styles.AudioContainer} onClick={playAudio}>
            <img className={styles.AudioImg} src="/assets/images/common/speakerOnIcon.svg" alt="play word" />
            <p>{transcription}</p>
          </div>
          <p>{wordTranslate}</p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p>{textMeaningTranslate}</p>
        <p>{exampleSentence}</p>
      </Modal.Body>
    </Modal>
  );
};

WordCard.propTypes = {
  wordInfo: PropTypes.object.isRequired,
  onHide: PropTypes.func.isRequired,
  playAudio: PropTypes.func.isRequired,
};

export default WordCard;
