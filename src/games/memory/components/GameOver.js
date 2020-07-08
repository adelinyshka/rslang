import React from 'react';
import PropTypes from 'prop-types';
import PopUp from './PopUp';
// import style from './GameOver.module.css';

function GameOver({ countCorrectAnswers, countIncorrectAnswers }) {
  return (
    <PopUp
      type={countCorrectAnswers > countIncorrectAnswers ? 'success' : 'error'}
      iconSrc="../assets/images/memory/iconCheck.svg"
      // content={`Процент правильных ответов:
      //   ${Math.floor(correctAnswers
      //     / 10 * 100)}%`}
      content={`Правильный ответов: ${countCorrectAnswers}` }
      footer="Попробуйте еще!"
    />
  );
}

GameOver.propTypes = {
  countCorrectAnswers: PropTypes.number,
  countIncorrectAnswers: PropTypes.number,
};

GameOver.defaultProps = {
  countCorrectAnswers: 0,
  countIncorrectAnswers: 0,
};

export default GameOver;
