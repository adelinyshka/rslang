import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SwitcherLevel from '../../../common/components/LevelSwitcher';
// import useAPI from '../../../common/utils/index';
// import fetchJSON from '../../../common/utils/index';
import Card from './Card';
import Timer from './Timer';
import Lives from './Lives';
import { Rules, Exit } from './Modal';
import GameOver from './GameOver';
import style from './Game.module.css';
import {
  // setWords,
  setLevel,
} from '../redux/index';
import { levelSelector } from '../redux/selectors';

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
  // {
  //   word: 'game1',
  //   translate: 'игра1',
  //   id: 11,
  // },
  // {
  //   word: 'car1',
  //   translate: 'машина1',
  //   id: 12,
  // },
  // {
  //   word: 'dinosaur1',
  //   translate: 'динозавр1',
  //   id: 13,
  // },
  // {
  //   word: 'planet1',
  //   translate: 'планета1',
  //   id: 14,
  // },
  // {
  //   word: 'plant1',
  //   translate: 'растение1',
  //   id: 15,
  // },
  // {
  //   word: 'keyboard1',
  //   translate: 'клавиатура1',
  //   id: 16,
  // },
  // {
  //   word: 'harpsichord1',
  //   translate: 'клавесин1',
  //   id: 17,
  // },
  // {
  //   word: 'sun1',
  //   translate: 'солнце1',
  //   id: 18,
  // },
  // {
  //   word: 'evolution1',
  //   translate: 'эволюция1',
  //   id: 19,
  // },
  // {
  //   word: 'information1',
  //   translate: 'информация1',
  //   id: 20,
  // },
];

const shuffle = (array) => array.sort(() => Math.random - 0.5);

function Game() {
  // const level = 1;

  const [russianWord, setRussianWord] = useState();
  const [englishWord, setEnglishWord] = useState();
  const [isRight, setIsRight] = useState(null);
  const [livesCount, setLivesCount] = useState(5);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [incorrectAnswers, setInorrectAnswers] = useState(0);

  // const [words, setWords] = useState(null);
  // const [getNewWords, setGetNewWords] = useState(true);

  // const userWordsURL = useMemo(
  //   () => 'words?page=2&group=0', [],
  // );

  // const wordsUseApi = useAPI(userWordsURL);
  // useEffect(() => {
  //   if (getNewWords) {
  //     setGetNewWords(true);
  //     setWords(wordsUseApi);
  //   }
  //   return () => {
  //     setGetNewWords(false);
  //   };
  // }, [wordsUseApi, words, getNewWords]);

  // const userWordsURL = useMemo(
  //   () => 'words?page=2&group=0', [],
  // );
  // const fetchOptions = {
  //   method: 'GET',
  // };

  // useEffect(() => {
  //   const wordsUseApi = fetchJSON(userWordsURL, fetchOptions);
  //   console.log(words);
  //   if (getNewWords) {
  //     setGetNewWords(true);
  //     setWords(wordsUseApi);
  //   }
  //   return () => {
  //     setGetNewWords(false);
  //   };
  // }, [fetchOptions, userWordsURL, getNewWords, words]);

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
  }, [correct, incorrect, correctAnswers]);

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
      {isExit ? (
        <Exit
          onCansel={() => setIsExit(false)}
          onExit={() => <Link to="./" /> }
        />
      ) : false}
      <div
        onClick={() => setIsExit(true)}
      >
        <img
          src="../assets/images/memory/cross.svg"
          alt="cross"
          className={style.cross}
        />
      </div>
      {isRules ? (
        <Rules
          onRules={() => setIsRules(false)}
        />
      ) : false}
      <div
        onClick={() => setIsRules(true)}
      >
        <img
          src="../assets/images/memory/rules.svg"
          alt="rules"
          className={style.rules}
        />
      </div>
      <div className={style.Level}>
        <SwitcherLevel />
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
