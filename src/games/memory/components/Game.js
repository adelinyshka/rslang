import React, { useState, useCallback, useEffect } from 'react';
// import SwitcherLevel from '../../../common/components/SwitcherLevel'
import Card from './Card';
import Timer from './Timer';
import Lives from './Lives';
import GameOver from './GameOver';
import style from './Game.module.css';

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

function Game() {
  const level = 0;

  const [russianWord, setRussianWord] = useState();
  const [englishWord, setEnglishWord] = useState();
  const [isRight, setIsRight] = useState();
  const [livesCount, setLivesCount] = useState(5);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setInorrectAnswers] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const correct = useCallback(() => {
    setIsRight(true);
    setCorrectAnswers(correctAnswers + 1);
  }, [correctAnswers]);

  const incorrect = useCallback(() => {
    setIsRight(false);
    setLivesCount(livesCount - 1);
  }, [livesCount]);

  const russianCardHandler = useCallback((cardId) => {
    setRussianWord(cardId);
    if (englishWord) {
      cardId === englishWord ? correct() : incorrect();
      checkResult();
    }
  }, [correct, englishWord, incorrect]);

  const englishCardHandler = useCallback((cardId) => {
    setEnglishWord(cardId);
    if (russianWord) {
      russianWord === cardId ? correct() : incorrect();
      checkResult();
    }
  }, [correct, russianWord, incorrect]);

  function checkResult() {
    setTimeout(() => {
      setIsRight(null);
      setRussianWord(null);
      setEnglishWord(null);
    }, 1000);
  }

  const gameOverHandler = useCallback(() => {
    setIsGameOver(true);
  }, []);

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
                onCardClick={() => englishCardHandler(id)}
                isActive={englishWord === id}
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
