/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './Audiocall.module.css';
import useApi from '../../../common/utils';
import Results from './Results';

const fetchOptions = {
  method: 'GET',
};

const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';

const audioRight = new Audio('/assets/audio/right.mp3');
const audioWrong = new Audio('/assets/audio/wrong.mp3');

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
let sumOfWords = 10;
const getEndpointUrl = (level, page) => `words?group=${level}&page=${page}`;

export default function Game({ callback }) {
  const [activeLevel, setActiveLevel] = useState(0);
  const [IsGameOver, setGameOver] = useState(false);
  const [hint, setHint] = useState(true);
  const [warn, setWarn] = useState(true);
  const [words, setWords] = useState(null);
  const [resultWord, setResultWord] = useState(null);
  const [shouldSoundBePlayed, setShouldSoundBePlayed] = useState(true);
  const [isWordChosen, setIsWordChosen] = useState(false);
  const [endpointUrl, setEndpointUrl] = useState(
    getEndpointUrl(activeLevel, 1),
  );
  const [srcImage, setSrcImage] = useState('');
  const changeVisible = () => {
    setWarn(!warn);
  };
  const history = useHistory();
  const action = useCallback((result) => {
    const firstRandomWords = shuffle(result).slice(0, 5);
    const resultOneWord = firstRandomWords[getRandomInt(5)];
    setResultWord(resultOneWord);
    setWords(firstRandomWords);
    setIsWordChosen(false);
    setShouldSoundBePlayed(true);
  }, []);

  const playSound = useCallback(() => {
    if (resultWord) {
      const pronounce = new Audio(`${audioPath}${resultWord.audio}`);
      setSrcImage(`${audioPath}${resultWord.image}`);
      pronounce.volume = 0.05;
      pronounce.play();
    }
  }, [resultWord]);

  if (resultWord && shouldSoundBePlayed) {
    playSound();
    setShouldSoundBePlayed(false);
  }

  useApi(endpointUrl, fetchOptions, action);

  const changeStatus = useCallback(() => {
    setHint(!hint);
  }, [hint]);

  const chooseWord = (word) => {
    if (word.id === resultWord.id) {
      audioRight.play();
    } else {
      audioWrong.play();
    }
    sumOfWords -= 1;
    setIsWordChosen(true);
  };

  return (
    IsGameOver ? <Results /> : (
      <div className={styles.Game}>
        <div className={styles.Header}>
          <img
            src="/assets/images/audiocall/Round Rec.png"
            alt="hint"
            onClick={() => changeStatus(false)}
          />
          <img
            src="/assets/images/audiocall/xwhite.png"
            alt="xwhite"
            onClick={() => changeVisible(false)}
          />
        </div>
        <div className={ hint ? styles.Hide : styles.Notification }>
          <img
            src="/assets/images/audiocall/notHint.png"
            alt="hint"
          />
          <p>
          Выберите правильный ответ после проигранного аудио
          </p>
          <button
            onClick={() => changeStatus(true)}
            className={styles.BtnNtfcation}
            type="button"
          >
          Понятно
          </button>
        </div>
        <div className={styles.GamePanel}>
          <img
            onClick={() => playSound()}
            className={isWordChosen ? styles.HidePicture : styles.Volume}
            src="/assets/images/audiocall/volume.png"
            alt="sound"
          />
          <img
            className={isWordChosen ? '' : styles.HidePicture}
            src={srcImage}
            alt="imageAnswer"
          />
          <div className={isWordChosen ? styles.Answer : styles.AnswerHide}>
            <img
              onClick={() => playSound()}
              className={styles.Volume}
              src="/assets/images/audiocall/volume.png"
              alt="sound"
            />
            <p>
              {resultWord && resultWord.word}
            </p>
          </div>
          <div className={styles.Words}>
            {words && words.map((word, index) => (
              <p
                className={
                  word.id !== resultWord.id && isWordChosen
                    ? styles.WrongWords : ''
                }
                key={word.id}
                onClick={() => chooseWord(word)}
              >
                {index + 1}
                {' '}
                {word.wordTranslate}
              </p>
            ))}
          </div>
          <button
            onClick={ () => {
              if (isWordChosen) {
                setEndpointUrl(getEndpointUrl(activeLevel, getRandomInt(30)));
              } else {
                audioWrong.play();
                setIsWordChosen(true);
                sumOfWords -= 1;
              }
              !sumOfWords ? setGameOver(true) : console.log(sumOfWords);
            } }
            className={styles.AnswerBtn}
            type="button"
          >
            {isWordChosen ? 'Дальше' : 'Не знаю'}
          </button>
        </div>
        <div className={ warn ? styles.ShadowHide : styles.Shadow }>
          <div className={styles.Warning}>
            <img
              src="/assets/images/audiocall/attention.png"
              alt="attention"
            />
            <p>
            Если вы выйдете во время игры, то прогресс не сохранится
            </p>
            <div className={styles.Butns}>
              <button
                type="button"
                className={styles.Cancel}
                onClick={() => changeVisible(false)}
              >
                Отменить
              </button>
              <button
                type="button"
                className={styles.Exit}
                onClick={() => history.push('/games')}
              >
              Выйти
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

Game.propTypes = {
  callback: PropTypes.func.isRequired,
};

