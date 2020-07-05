import React from 'react';
import PropTypes from 'prop-types';
import PopUp from './PopUp';
// import style from './GameOver.module.css';

function GameOver({ correctAnswers, incorrectAnswers }) {
  return (
    <PopUp
      type={correctAnswers > incorrectAnswers ? 'success' : 'error'}
      iconSrc="../assets/images/memory/iconCheck.svg"
      // content={`Процент правильных ответов:
      //   ${Math.floor(correctAnswers
      //     / 10 * 100)}%`}
      content={`Правильный ответов: ${correctAnswers}` }
      footer="Попробуйте еще!"
    />
  );
}

GameOver.propTypes = {
  correctAnswers: PropTypes.number,
  incorrectAnswers: PropTypes.number,
};

GameOver.defaultProps = {
  correctAnswers: 0,
  incorrectAnswers: 0,
};

export default GameOver;
