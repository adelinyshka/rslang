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

const shuffle = (array) => array.sort(() => Math.random - 0.5);

function Game() {
  const level = 0;

  const [russianWord, setRussianWord] = useState();
  const [englishWord, setEnglishWord] = useState();
  const [isRight, setIsRight] = useState(null);
  const [livesCount, setLivesCount] = useState(5);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  // const [incorrectAnswers, setInorrectAnswers] = useState(0);

  const [isGameOver, setIsGameOver] = useState(false);

  // const dictionaryEng = shuffle(dictionary);
  // const dictionaryRus = shuffle(dictionaryEng);
  // console.dir(dictionary);
  // console.dir(dictionaryRus);

  const correct = useCallback((cardId) => {
    const cAnswers = correctAnswers;
    cAnswers.push(cardId);
    setCorrectAnswers(cAnswers);
    setIsRight(true);
    setCountCorrectAnswers(countCorrectAnswers + 1);
  }, [countCorrectAnswers, correctAnswers]);

  const incorrect = useCallback(() => {
    setIsRight(false);
    setLivesCount(livesCount - 1);
  }, [livesCount]);

  const cardHandler = useCallback((cardId, word, setWord) => {
    if (correctAnswers.indexOf(cardId) === -1) {
      setWord(cardId);

      if (word) {
        cardId === word ? correct(cardId) : incorrect();
        checkResult();
      }
    }
  }, [correct, incorrect]);

  function checkResult() {
    setTimeout(() => {
      setIsRight(null);
      setRussianWord(null);
      setEnglishWord(null);
    }, 500);
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
          initialTime={100}
        />
      </div>
      <div className={style.CardBlock}>
        <div className={style.cardEng}>
          {
            dictionary.map(({ word, id }, index) => (
              <Card
                key={index}
                onCardClick={() => cardHandler(id, russianWord, setEnglishWord)}
                isActive={englishWord === id}
                isRight={isRight}
                isCorrect={correctAnswers.indexOf(id) !== -1}
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
                onCardClick={() => cardHandler(id, englishWord, setRussianWord)}
                isActive={russianWord === id}
                isRight={isRight}
                isCorrect={correctAnswers.indexOf(id) !== -1}
                disabled="true"
              >
                {translate}
              </Card>
            ))
          }
        </div>
      </div>
      {
        isGameOver
          // ? <GameOver countCorrectAnswers={countCorrectAnswers} incorrectAnswers={10 - countCorrectAnswers} />
          ? <GameOver countCorrectAnswers={countCorrectAnswers} />
          : ''
      }
    </div>
  );
}

export default Game;
