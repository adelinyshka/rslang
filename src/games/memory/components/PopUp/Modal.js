import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PopUp from './PopUp';
import style from './Modal.module.css';

import StyleGameOver from './style.GameOver';
import Statistics from '../Statistics/Statistics';

function GameOver({
  statistics,
}) {
  const [isStatisticsSend, setIsStatisticsSend] = useState(false);
  return (
    <div>
      {isStatisticsSend ? (
        <StyleGameOver>
          <ul className="listWords">
            {
              statistics.correct.map(({
                word,
                transcription,
                wordTranslate,
              }, index) => (
                  <li
                    key={index}
                    className="learnedWord"
                  >
                    <div>
                      <p>{`${word}`}</p>
                      <p>{`${transcription}`}</p>
                      <p>{`${wordTranslate}`}</p>
                    </div>
                  </li>
                ))
            }
            {
              statistics.incorrect.map(({
                word,
                transcription,
                wordTranslate,
              }, index) => (
                  <li
                    key={index}
                  >
                    <div>
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
                className={style.btnExit}
                type="button"
              >
                Попробовать ещё!
              </button>
            </Link>
          </div>
        </StyleGameOver>
      )
        : (
          <Statistics
            setIsStatisticsSend={setIsStatisticsSend}
            statistics={statistics}
          />
        )}
    </div>
  );
}

GameOver.propTypes = {
  statistics: PropTypes.object,
};

GameOver.defaultProps = {
  statistics: {},
};

export { GameOver };
