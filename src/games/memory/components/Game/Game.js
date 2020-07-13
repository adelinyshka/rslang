import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SwitcherLevel from '../../../../common/components/LevelSwitcher';
import Card from '../Card/Card';
import Timer from '../Timer/Timer';
import Lives from '../Lives/Lives';
import { Rules, Exit, GameOver } from '../PopUp/Modal';
import style from './Game.module.css';
import { setLevel } from '../../redux/index';
import { levelSelector } from '../../redux/selectors';
import Dictionary from '../Dictionary/Dictionary';

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
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [isCansel, setIsCansel] = useState(false);
  const [page, setPage] = useState(0);
  const [startTime, setStartTime] = useState(60);
  const [initialTime, setInitialTime] = useState(startTime);
  const [isShouldRestart, setIsShouldRestart] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [statistics, setStatistics] = useState({ correct: [], incorrect: [] });

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

      setIsShouldRestart(true);
      setInitialTime(startTime);
    }
  }, [countCorrectAnswers, startTime]);

  const correct = useCallback((cardId, words) => {
    const cAnswers = correctAnswers;
    cAnswers.push(cardId);
    setCorrectAnswers(cAnswers);
    setIsRight(true);
    setCountCorrectAnswers(countCorrectAnswers + 1);
    setIsShouldRestart(false);

    const oldStatistics = statistics;
    const newWord = words.filter((item) => item.id === cardId);

    if (statistics.incorrect.indexOf(newWord[0].word) === -1) {
      oldStatistics.correct.push(newWord[0]);
      setStatistics(oldStatistics);
    }
  }, [countCorrectAnswers, correctAnswers,
    setCorrectAnswers, setIsRight, setCountCorrectAnswers, statistics]);

  const incorrect = useCallback((cardId, words) => {
    setIsRight(false);
    setLivesCount(livesCount - 1);

    const oldStatistics = statistics;
    const newWord = words.filter((item) => item.id === cardId);
    oldStatistics.incorrect.push(newWord[0]);
    setStatistics(oldStatistics);
  }, [livesCount, setLivesCount, setIsRight, statistics]);

  const checkResult = useCallback((levelProps) => {
    setTimeout(() => {
      setIsRight(null);
      setRussianWord(null);
      setEnglishWord(null);
    }, 500);
  }, []);

  const cardHandler = useCallback((cardId, word, setWord) => {
    if (correctAnswers.indexOf(cardId) === -1) {
      setWord(cardId);

      if (word) {
        cardId === word
          ? correct(cardId, englishWords) : incorrect(cardId, englishWords);
        checkResult();
      }
    }
  }, [correct, incorrect, correctAnswers, checkResult, englishWords]);

  const gameOverHandler = useCallback(() => {
    setIsGameOver(true);
  }, []);

  return (
    <div>
      {!isGameOver
        ? (
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
                isShouldRestart={isShouldRestart}
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
          </div>
        ) : (
          <GameOver
            statistics={statistics}
            countCorrectAnswers={countCorrectAnswers}
            correctAnswers={correctAnswers}
            onGameOver={() => setIsGameOver(true)}
          />
        )}
    </div>
  );
}

export default Game;
