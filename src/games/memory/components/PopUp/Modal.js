import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PopUp from './PopUp';
// import useAPI from '../../../../common/utils';
import style from './Modal.module.css';

import StyleGameOver from './style.GameOver';
import Statistics from '../Statistics/Statistics';

const Rules = ({ onRules, onCancel }) => (
  <div>
    <PopUp
      type="warning"
      iconSrc="../assets/images/memory/iconQuestion.svg"
      content="Кликайте по словам, чтобы совместить слово и его перевод"
      footer={(
        <button
          className={style.btnRules}
          onClick={onRules}
          type="button"
        >
          Понятно
        </button>
      )}
    />
  </div>
);

const Exit = ({ onCancel, onExit }) => (
  <div>
    <PopUp
      type="error"
      iconSrc="../assets/images/memory/iconExclamation.svg"
      content={(
        <div>
          <p>
            Если вы выйдете во время игры,
            <br />
          то прогресс не сохранится
          </p>
        </div>
      )}
      footer={(
        <div>
          <button
            onClick={onCancel}
            className={classNames(style.btnCancel)}
            type="button"
          >
            Отменить
          </button>
          <Link to="../games">
            <button
              className={style.btnExit}
              type="button"
            >
              Выйти
            </button>
          </Link>
        </div>
      )}
    />
  </div>
);

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

Rules.propTypes = {
  onCancel: PropTypes.func,
  onRules: PropTypes.func,
};

Rules.defaultProps = {
  onCancel: () => { },
  onRules: () => { },
};

Exit.propTypes = {
  onCancel: PropTypes.func,
  onExit: PropTypes.func,
};

Exit.defaultProps = {
  onCancel: () => { },
  onExit: () => { },
};

export { Rules, Exit, GameOver };
