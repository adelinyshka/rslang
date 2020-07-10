import React, { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SwitcherLevel from '../../../common/components/LevelSwitcher';
import Card from './Card';
import Timer from './Timer';
import Lives from './Lives';
import { Rules, Exit } from './Modal';
import GameOver from './GameOver';
import style from './Game.module.css';
import { setLevel } from '../redux/index';
import { levelSelector } from '../redux/selectors';
import Dictionary from './Dictionary';

function Game() {
  const dispatch = useDispatch();
  const activeLevel = useSelector(levelSelector);

  const [dictionary, setDictionary] = useState([]);
  const [russianWords, setRussianWords] = useState();
  const [englishWords, setEnglishWords] = useState();
  const [russianWord, setRussianWord] = useState();
  const [englishWord, setEnglishWord] = useState();
  const [isRight, setIsRight] = useState(null);
  const [livesCount, setLivesCount] = useState(5);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [isCansel, setIsCansel] = useState(false);
  const [page, setPage] = useState(27);
  const [startTime, setStartTime] = useState(60);
  const [initialTime, setInitialTime] = useState(startTime);
  // const [incorrectAnswers, setInorrectAnswers] = useState(0);

  const changeActiveLevel = useCallback((levelProps) => {
    if (activeLevel !== levelProps) {
      dispatch(setLevel(levelProps));
      setDictionary([]);
      setStartTime(60 - (activeLevel + 1) * 2);
      setPage(0);
    }
  }, [dispatch, activeLevel]);

  useEffect(() => {
    if (countCorrectAnswers % 10 === 0) {
      setDictionary([]);

      if (page === 29) {
        changeActiveLevel(activeLevel + 1);
        if (activeLevel === 6) {
          changeActiveLevel(1);
        }
      } else {
        setPage(page + 1);
      }

      setInitialTime(startTime);
    }
  }, [countCorrectAnswers, startTime]);

  const correct = useCallback((cardId) => {
    const cAnswers = correctAnswers;
    cAnswers.push(cardId);
    setCorrectAnswers(cAnswers);
    setIsRight(true);
    setCountCorrectAnswers(countCorrectAnswers + 1);
  }, [countCorrectAnswers, correctAnswers,
    setCorrectAnswers, setIsRight, setCountCorrectAnswers]);

  const incorrect = useCallback(() => {
    setIsRight(false);
    setLivesCount(livesCount - 1);
  }, [livesCount, setLivesCount, setIsRight]);

  const cardHandler = useCallback((cardId, word, setWord) => {
    if (correctAnswers.indexOf(cardId) === -1) {
      setWord(cardId);

      if (word) {
        cardId === word ? correct(cardId) : incorrect();
        checkResult();
      }
    }
  }, [correct, incorrect, correctAnswers, checkResult]);

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
          onCansel={() => setIsCansel(false)}
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
        <SwitcherLevel
          changeActiveLevel={changeActiveLevel}
          currentLevel={activeLevel + 1}
        />
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
          initialTime={initialTime}
        />
      </div>
      {
        dictionary.length === 0
          ? (
            <Dictionary
              level={activeLevel}
              page={page}
              setDictionary={setDictionary}
              setRussianWords={setRussianWords}
              setEnglishWords={setEnglishWords}
            />
          )
          : (
            <div className={style.CardBlock}>
              <div className={style.cardEng}>
                { dictionary
                  ? englishWords.map(({ word, id }, index) => (
                    <Card
                      key={id}
                      onCardClick={() => cardHandler(id,
                        russianWord, setEnglishWord)}
                      isActive={englishWord === id}
                      isRight={isRight}
                      isCorrect={correctAnswers.indexOf(id) !== -1}
                    >
                      {word}
                    </Card>
                  ))
                  : false}
              </div>

              <div className={style.cardRus}>
                { dictionary
                  ? russianWords.map(({ wordTranslate, id }, index) => (
                    <Card
                      key={index}
                      onCardClick={() => cardHandler(id,
                        englishWord, setRussianWord)}
                      isActive={russianWord === id}
                      isRight={isRight}
                      isCorrect={correctAnswers.indexOf(id) !== -1}
                      disabled="true"
                    >
                      {wordTranslate}
                    </Card>
                  ))
                  : false}
              </div>
            </div>
          )
      }
      {
        isGameOver
          // ? <GameOver countCorrectAnswers={countCorrectAnswers} incorrectAnswers={10 - countCorrectAnswers} />
          ? (
            <GameOver
              countCorrectAnswers={countCorrectAnswers}
            />
          )
          : ''
      }
    </div>
  );
}

export default Game;
