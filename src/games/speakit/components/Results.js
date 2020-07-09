import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import StyleResults from './style.Results';

import {
  wordsSelector,
  speechWordsSelector,
} from '../redux/selectors';

const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';

const playAudio = (audio) => {
  const pronounce = new Audio(`${audioPath}${audio}`);
  pronounce.play();
};

const Results = ({ setModalResult, getNewWords }) => {
  const words = useSelector(wordsSelector);
  const speechWords = useSelector(speechWordsSelector);

  const trueWords = useMemo(() => words.reduce((count, { word }) => {
    const learnWord = speechWords.find((element) => word === element);
    return learnWord ? count + 1 : count;
  }, 0), [speechWords, words]);

  const falseWords = useMemo(() => words.reduce((count, { word }) => {
    const learnWord = speechWords.find((element) => word === element);
    return learnWord ? count : count + 1;
  }, 0), [speechWords, words]);

  return (
    <StyleResults>
      {`falseWords = ${falseWords}`}
      {`trueWords = ${trueWords}`}
      <ul>
        {
          words.map(({
            word,
            transcription,
            wordTranslate,
            audio,
          }) => {
            const learnedWord = speechWords.find((element) => word === element);
            return (
              <li
                key={word}
                className={classNames({ learnedWord })}
              >
                <p>
                  <img
                    src="./assets/images/speakit/audio-icon.svg"
                    alt="audio-icon.svg"
                    onClick={() => playAudio(audio)}
                    role="section"
                  />
                  {`${word} ${transcription} ${wordTranslate}`}
                </p>
              </li>
            );
          })
        }
      </ul>
      <button
        type="button"
        className="button__close-results"
        onClick={() => setModalResult()}
      >
        Return
      </button>
      <button
        type="button"
        className="button__new-game"
        onClick={() => getNewWords()}
      >
        New game
      </button>
    </StyleResults>
  );
};

Results.propTypes = {
  setModalResult: PropTypes.func.isRequired,
  getNewWords: PropTypes.func.isRequired,
};

export default Results;
