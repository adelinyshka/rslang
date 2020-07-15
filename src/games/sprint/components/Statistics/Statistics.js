import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ResultsWrapper from './style.Statistics';
import {
  resultsSelector,
} from '../../redux/selectors';

const playAudio = (audio) => {
  const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';
  const pronounce = new Audio(`${audioPath}${audio}`);
  pronounce.play();
};

const Results = () => {
  const results = useSelector(resultsSelector);

  const countWords = useCallback((bool) => results.reduce(
    (count, { correctAnswer }) => (correctAnswer === bool ? count + 1 : count),
    0,
  ), [results]);

  // const falseWords = useMemo(() => words.reduce((count, { word }) => {
  //   const learnWord = speechWords.find((element) => word === element);
  //   return learnWord ? count : count + 1;
  // }, 0), [speechWords, words]);

  return (
    <ResultsWrapper>
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
      <ul className="results-words">
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
              className={classNames({ 'learnedWord': correctAnswer })}
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
      <div className="wrapper-btn ">
        <Link to="../games">
          <button
            type="button"
            className="btn-close"
          >
            К списку игр
          </button>
        </Link>
        {/* <button */}
        {/*  type="button" */}
        {/*  className="button__new-game" */}
        {/*  onClick={() => getNewWords()} */}
        {/* > */}
        {/* New game */}
        {/* </button> */}
      </div>
    </ResultsWrapper>
  );
};

export default Results;
