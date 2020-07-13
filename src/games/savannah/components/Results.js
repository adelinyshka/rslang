import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ResultsWrapper from './ResultsWrapper';

const playAudio = (audio) => {
  const audioPath = 'https://raw.githubusercontent.com/'
    + 'alekchaik/rslang-data/master/';
  const pronounce = new Audio(`${audioPath}${audio}`);
  pronounce.play();
};

const Results = ({
  arrayWithStatistics, numOfRightAnswers, numOfWrongAnswers, toNewGame,
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
      <Link to="../games">
        <button
          type="button"
          className="btn-close"
        >
          К списку игр
        </button>
      </Link>
      <button
        type="button"
        className="btn-new"
        onClick={toNewGame}
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
  toNewGame: PropTypes.func.isRequired,
};

export default Results;
