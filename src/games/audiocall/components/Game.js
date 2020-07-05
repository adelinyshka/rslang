import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Audiocall.module.css';

export default function Game({ callback }) {
  const [hint, setHint] = useState(true);
  let className = '';
  const changeStatus = () => {
    setHint(!hint);
    if (!hint) {
      className = styles.Notification;
    } else {
      className = styles.Hide;
    }
  };
  if (!hint) {
    className = styles.Notification;
  } else {
    className = styles.Hide;
  }
  // console.log(className);
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
          onClick={ () => callback(false) }
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
    </div>
  );
}

Game.propTypes = {
  callback: PropTypes.func.isRequired,
};

