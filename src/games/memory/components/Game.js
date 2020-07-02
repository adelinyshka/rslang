import React, { useState } from 'react';
// import SwitcherLevel from '../../../common/components/SwitcherLevel'
import Card from './Card';
import Timer from './Timer';
import Lives from './Lives';
import GameOver from './GameOver';
import style from './Game.module.css';

function Game() {
  const dictionary = [
    {
      word: 'game',
      translate: 'игра',
      id: 1,
    },
    {
      word: 'car',
      translate: 'машина',
      id: 2,
    },
    {
      word: 'dinosaur',
      translate: 'динозавр',
      id: 3,
    },
    {
      word: 'planet',
      translate: 'планета',
      id: 4,
    },
    {
      word: 'plant',
      translate: 'растение',
      id: 5,
    },
    {
      word: 'keyboard',
      translate: 'клавиатура',
      id: 6,
    },
    {
      word: 'harpsichord',
      translate: 'клавесин',
      id: 7,
    },
    {
      word: 'sun',
      translate: 'солнце',
      id: 8,
    },
    {
      word: 'evolution',
      translate: 'эволюция',
      id: 9,
    },
    {
      word: 'information',
      translate: 'информация',
      id: 10,
    },
  ];

  const level = 0;

  const [russianWord, setRussianWord] = useState(null);
  const [engleshWord, setEngleshWord] = useState(null);
  const [isRight, setIsRight] = useState(null);
  const [livesCount, setLivesCount] = useState(5);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setInorrectAnswers] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function russianCardHandler(cardId) {
    setRussianWord(cardId);
    if (engleshWord) {
      cardId === engleshWord ? correct() : incorrect();
      checkResult();
    }
  }

  function engleshCardHandler(cardId) {
    setEngleshWord(cardId);
    if (russianWord) {
      russianWord === cardId ? correct() : incorrect();
      checkResult();
    }
  }

  function correct() {
    setIsRight(true);
    setCorrectAnswers(correctAnswers + 1);
  }

  function incorrect() {
    setIsRight(false);
    setLivesCount(livesCount - 1);
  }

  function checkResult() {
    setTimeout(() => {
      setIsRight(null);
      setRussianWord(null);
      setEngleshWord(null);
    }, 1000);
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  return (
    <div className={style.GameWrapper}>
      <div className={style.Level}>
        Блок с уровнем
        {level}
      </div>
      <div className={style.Lives}>
        <Lives
          livesCount={livesCount}
          leftLifesHandler={gameOverHandler}
          src="../assets/images/memory/heart.svg"
        />
        <Timer
          timeOutHandler={gameOverHandler}
          isActive={!isGameOver}
          initialTime={10}
        />
      </div>
      <div className={style.CardBlock}>
        <div className={style.cardEng}>
          {
            dictionary.map(({ word, id }, index) => (
              <Card
                key={index}
                onCardClick={() => engleshCardHandler(id)}
                isActive={engleshWord === id}
                isRight={isRight}
              >
                {word}
              </Card>
            ))
          }
        </div>

        <div className={style.cardRus}>
          {
            dictionary.map(({ translate, id }, index) => (
              <Card
                key={index}
                onCardClick={() => russianCardHandler(id)}
                isActive={russianWord === id}
                isRight={isRight}
              >
                {translate}
              </Card>
            ))
          }
        </div>
      </div>
      {
        isGameOver ? <GameOver correctAnswers={10} incorrectAnswers={5} /> : ''
      }
    </div>
  );
}

export default Game;
