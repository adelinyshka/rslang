/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Audiocall.module.css';

export default function Game({ callback }) {
  const [hint, setHint] = useState(true);
  const [warn, setWarn] = useState(true);
  let className = '';
  let warning = styles.ShadowHide;
  const changeVisible = () => {
    setWarn(!warn);
  };

  if (warn) {
    warning = styles.ShadowHide;
  } else {
    warning = styles.Shadow;
  }

  const changeStatus = () => {
    setHint(!hint);
  };

  if (!hint) {
    className = styles.Notification;
  } else {
    className = styles.Hide;
  }
  // console.log(className);
  function leaveOut() {
    changeVisible(false);
  }

  function handleClick(e) {
    changeStatus(false);
    console.log(e.target);
  }

  return (
    <div className={styles.Game}>
      <div className={styles.Header}>
        <img
          src="./assets/images/audiocall/notification on.png"
          alt="notification"
        />
        <img
          src="./assets/images/audiocall/Round Rec.png"
          alt="hint"
          onClick={handleClick}
        />
        <img
          src="./assets/images/audiocall/xwhite.png"
          alt="xwhite"
          onClick={leaveOut}
        />
      </div>
      <div className={ className }>
        <img
          src="./assets/images/audiocall/notHint.png"
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
          src="./assets/images/audiocall/volume.png"
          alt="sound"
        />
        <div className={styles.Answer}>
          <img
            src="./assets/images/audiocall/volume.png"
            alt="sound"
          />
          <p>
            Word
          </p>
        </div>
        <div className={styles.Words}>
          <p>
                1 слово
          </p>
          <p>
                2 мысль
          </p>
          <p>
                3 мир
          </p>
          <p>
                4 ирис
          </p>
          <p>
                5 вирус
          </p>
        </div>
        <button className={styles.AnswerBtn} type="button">
            Не знаю
        </button>
      </div>
      <div className={ warning }>
        <div className={styles.Warning}>
          <img
            src="./assets/images/audiocall/attention.png"
            alt="attention"
          />
          <p>
            Если вы выйдете во время игры, то прогресс не сохранится
          </p>
          <div className={styles.Butns}>
            <button
              type="button"
              className={styles.Cancel}
              onClick={leaveOut}
            >
                Отменить
            </button>
            <button
              type="button"
              className={styles.Exit}
              onClick={ () => callback(false) }
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

