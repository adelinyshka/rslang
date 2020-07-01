import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import StyleResults from './style.Results';

import {
  wordsSelector,
  speechWordsSelector,
} from '../redux/selectors';

const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';

export default () => {
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

  const playAudio = useCallback((audio) => {
    const pronounce = new Audio(`${audioPath}${audio}`);
    pronounce.play();
  }, []);

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
    </StyleResults>
  );
};
