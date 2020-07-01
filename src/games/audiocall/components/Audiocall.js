import React from 'react';
import styles from './Audiocall.module.css';

export default function Audiocall() {
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
        />
        <img
          src="./assets/images/audiocall/xwhite.png"
          alt="xwhite"
        />
      </div>
      <div className={styles.Hide}>
        <img
          src="./assets/images/audiocall/notHint.png"
          alt="hint"
        />
        <p>
          Выберите правильный ответ после проигранного аудио
        </p>
        <button className={styles.BtnNtfcation} type="button">
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
