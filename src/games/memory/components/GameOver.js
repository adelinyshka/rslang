import React from 'react';
import PopUp from './PopUp';
// import style from './GameOver.module.css';

function GameOver({ correctAnswers, incorrectAnswers }) {
  return (
    <PopUp
      type={correctAnswers > incorrectAnswers ? 'success' : 'error'}
      iconSrc="../assets/images/memory/iconCheck.svg"
      content={`Процент правильных ответов: 
        ${Math.floor(correctAnswers
          / (correctAnswers + incorrectAnswers) * 100)}%`}
      footer="Попробуйте еще!"
    />
  );
}

export default GameOver;
