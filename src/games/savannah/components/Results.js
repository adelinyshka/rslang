import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ResultsWrapper from './ResultsWrapper';

const playAudio = (audio) => {
  const audioPath = 'https://raw.githubusercontent.com/'
    + 'alekchaik/rslang-data/master/';
  const pronounce = new Audio(`${audioPath}${audio}`);
  pronounce.play();
};

const Results = ({
  arrayWithStatistics, numOfRightAnswers, numOfWrongAnswers,
}) => (
  <ResultsWrapper>
    <div className="wrapper-icons">
      <div className="left">
        <img src="/assets/images/savannah/right.svg" alt="" />
        <span className="results">{`${numOfRightAnswers}`}</span>
      </div>
      <div className="right">
        <img src="/assets/images/savannah/wrong.svg" alt="" />
        <span className="results">{`${numOfWrongAnswers}`}</span>

      </div>
    </div>
    <ul className="results-words">
      {
        arrayWithStatistics.map(({
          id,
          audio,
          word,
          transcription,
          translation,
          isCorrect,
        }) => (
          <li
            key={id}
            className={classNames({ 'learnedWord': isCorrect })}
          >
            <div>
              <img
                className="results-audio-icon"
                src="/assets/images/savannah/notification_on.svg"
                alt="audio-icon.svg"
                onClick={() => playAudio(audio)}
                role="section"
              />
              <p>{`${word}`}</p>
              <p>{`${transcription}`}</p>
              <p>{`${translation}`}</p>
            </div>
          </li>
        ))
      }
    </ul>
    <div className="wrapper-btn ">
      <button
        type="button"
        className="btn-close"
        onClick={() => {}}
      >
          К списку игр
      </button>
      <button
        type="button"
        className="btn-new"
        onClick={() => {}}
      >
          Новая игра
      </button>
    </div>
  </ResultsWrapper>
);

Results.propTypes = {
  arrayWithStatistics: PropTypes.array.isRequired,
  numOfRightAnswers: PropTypes.number.isRequired,
  numOfWrongAnswers: PropTypes.number.isRequired,
};

export default Results;
