/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './Audiocall.module.css';
import useApi from '../../../common/utils';

const fetchOptions = {
  method: 'GET',
};

const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';

const audioRight = new Audio('/assets/audio/right.mp3');
const audioWrong = new Audio('/assets/audio/wrong.mp3');

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

let srcImage;
let pronounce;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getEndpointUrl = (level, page) => `words?group=${level}&page=${page}`;

export default function Game({ callback }) {
  const [hint, setHint] = useState(true);
  const [warn, setWarn] = useState(true);
  const [words, setWords] = useState(null);
  const [resultWord, setResultWord] = useState(null);
  const [shouldSoundBePlayed, setShouldSoundBePlayed] = useState(true);
  const [isWordChosen, setIsWordChosen] = useState(false);
  const [endpointUrl, setEndpointUrl] = useState(getEndpointUrl(0, 1));
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
      pronounce = new Audio(`${audioPath}${resultWord.audio}`);
      srcImage = `${audioPath}${resultWord.image}`;
      pronounce.volume = 0.05;
      pronounce.play();
    }
  }, [resultWord]);

  if (resultWord && shouldSoundBePlayed) {
    playSound();
    setShouldSoundBePlayed(false);
  }

  useApi(endpointUrl, fetchOptions, action);

  const changeStatus = () => {
    setHint(!hint);
  };

  const chooseWord = (word) => {
    if (word.id === resultWord.id) {
      audioRight.play();
    } else {
      audioWrong.play();
    }
    setIsWordChosen(true);
  };

  return (
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
              setEndpointUrl(getEndpointUrl(0, getRandomInt(30)));
            } else {
              audioWrong.play();
              setIsWordChosen(true);
            }
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
  );
}

Game.propTypes = {
  callback: PropTypes.func.isRequired,
};

