import React, { useCallback } from 'react';
import classNames from 'classnames';

import { useSelector } from 'react-redux';
import StyleResults from './style.Statistics';

import {
  resultsSelector,
} from '../../redux/selectors';

const playAudio = (audio) => {
  const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';
  const pronounce = new Audio(`${audioPath}${audio}`);
  pronounce.play();
};

const Results = ({ setModalResult, getNewWords }) => {
  const results = useSelector(resultsSelector);

  const countWords = useCallback((bool) => results.reduce((count, { correctAnswer }) => (correctAnswer === bool ? count + 1 : count),
    0), [results]);

  // const falseWords = useMemo(() => words.reduce((count, { word }) => {
  //   const learnWord = speechWords.find((element) => word === element);
  //   return learnWord ? count : count + 1;
  // }, 0), [speechWords, words]);

  return (
    <StyleResults>
      <div className="wrapper-icons">
        <div className="left">
          <img src="/assets/images/sprint/good-results.svg" alt="" />
          <span className="results">{`${countWords(true)}`}</span>
        </div>
        <div className="right">
          <img src="/assets/images/sprint/bad-results.svg" alt="" />
          <span className="results">{`${countWords(false)}`}</span>

        </div>
      </div>
      <ul className="listWords">
        {
          results.map(({
            word,
            transcription,
            wordTranslate,
            audio,
            correctAnswer,
          }) => (
            <li
              key={word}
              className={classNames({ correctAnswer })}
            >
              <div>
                <img
                  className="results-audio-icon"
                  src="/assets/images/sprint/audio-icon.svg"
                  alt="audio-icon.svg"
                  onClick={() => playAudio(audio)}
                  role="section"
                />
                <p>{`${word}`}</p>
                <p>{`${transcription}`}</p>
                <p>{`${wordTranslate}`}</p>
              </div>
            </li>
          ))
        }
      </ul>
      {/* <div className="wrapper-btn ">
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
      </div> */}
    </StyleResults>
  );
};

export default Results;
