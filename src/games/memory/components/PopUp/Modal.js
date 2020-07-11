import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PopUp from './PopUp';
import style from './Modal.module.css';

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
          <Link to="./">
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
  countCorrectAnswers,
  countIncorrectAnswers,
  correctAnswers,
}) {
  console.log('correctAnswers: ', correctAnswers);

  return (
    <PopUp
      type={countCorrectAnswers > countIncorrectAnswers ? 'success' : 'error'}
      iconSrc="../assets/images/memory/iconCheck.svg"
      // content={`Процент правильных ответов:
      //   ${Math.floor(correctAnswers
      //     / 10 * 100)}%`}
      content={`Правильный ответов: ${countCorrectAnswers}` }
      footer={(
        <div>
          <Link to="./">
            <button
              className={style.btnExit}
              type="button"
            >
              Попробовать ещё!
            </button>
          </Link>
        </div>
      )}
    />
  );
}

GameOver.propTypes = {
  countCorrectAnswers: PropTypes.number,
  countIncorrectAnswers: PropTypes.number,
  correctAnswers: PropTypes.string,
};

GameOver.defaultProps = {
  countCorrectAnswers: 0,
  countIncorrectAnswers: 0,
  correctAnswers: '',
};

Rules.propTypes = {
  onCancel: PropTypes.func,
  onRules: PropTypes.func,
};

Rules.defaultProps = {
  onCancel: () => {},
  onRules: () => {},
};

Exit.propTypes = {
  onCancel: PropTypes.func,
  onExit: PropTypes.func,
};

Exit.defaultProps = {
  onCancel: () => {},
  onExit: () => {},
};

export { Rules, Exit, GameOver };
