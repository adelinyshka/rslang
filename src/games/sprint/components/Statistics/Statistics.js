import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import ResultsWrapper from './style.Statistics';
import { fetchJSON } from '../../../../common/utils';
import {
  tokenSelector,
  userIdSelector,
} from '../../../../auth/redux/selectors';
import {
  resultsSelector,
} from '../../redux/selectors';
import {
  setDefault,
} from '../../redux';

const playAudio = (audio) => {
  const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';
  const pronounce = new Audio(`${audioPath}${audio}`);
  pronounce.play();
};

const baseStatistic = {
  'learnedWords': 0,
  'optional': {
    'sprint': {
    },
  },
};

const Results = () => {
  const results = useSelector(resultsSelector);
  const userID = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  const countWords = useCallback((bool) => results.reduce(
    (count, { correctAnswer }) => (correctAnswer === bool ? count + 1 : count),
    0,
  ), [results]);

  const Sendstatistic = useCallback(() => {
    const link = `users/${userID}/statistics`;

    const date = new Date(Date.now());

    const dateString = date.toLocaleDateString('en-Us');

    const getFetchOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const promise = fetchJSON(link, getFetchOptions);
    promise
      .then(({ id, ...stats }) => {
        let gameStatistics = {};
        const optionals = stats.optional;

        if (stats.optional.sprint) {
          gameStatistics = { ...stats.optional.sprint };
        }

        if (gameStatistics[dateString]) {
          gameStatistics[dateString] = {
            'timesPlayed': gameStatistics[dateString].timesPlayed + 1,
            'result': gameStatistics[dateString].result + countWords(true),
          };
        } else {
          gameStatistics[dateString] = {
            'timesPlayed': 1,
            'result': countWords(true),
          };
        }

        const currentStatistics = {
          ...stats,
          optional: {
            ...optionals,
            sprint: {
              ...gameStatistics,
            },
          },
        };
        console.log(currentStatistics);
        return currentStatistics;
      })
      .then((currentStatistics) => {
        const sendOptions = {
          ...getFetchOptions,
          method: 'PUT',
          body: JSON.stringify(currentStatistics),
        };
        fetchJSON(link, sendOptions);
      })
      .catch(() => {
        const currentStatistics = {
          ...baseStatistic,
        };

        currentStatistics.optional.sprint[dateString] = {
          'timesPlayed': 1,
          'result': countWords(true),
        };

        const sendOptions = {
          ...getFetchOptions,
          method: 'PUT',
          body: JSON.stringify(currentStatistics),
        };

        fetchJSON(link, sendOptions);
      });
  }, [countWords, token, userID]);

  Sendstatistic();

  const onExit = useCallback(() => {
    dispatch(setDefault());
  }, [dispatch]);

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
        <Link to="../games" onClick={onExit}>
          <button
            type="button"
            className="btn-close"
          >
            К списку игр
          </button>
        </Link>
      </div>
    </ResultsWrapper>
  );
};

export default Results;
