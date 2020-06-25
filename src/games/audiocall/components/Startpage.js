import React from 'react';
import styles from './Audiocall.module.css';

export default function Startpage() {
  return (
    <div className={styles.Startpage}>
      <div className={styles.Header}>
        <img
          className={styles.XImage}
          src="./assets/images/audiocall/x.png"
          alt="x"
        />
      </div>
      <h2>
          Аудиовызов
      </h2>
      <p>
          Тренировка улучшает восприятие английской речи на слух.
      </p>
      <button className={styles.StartBtn} type="button">
        Start
      </button>
      <div className={styles.Footer}>
        <img
          className={styles.WomanImage}
          src="./assets/images/audiocall/woman.png"
          alt="woman"
        />
      </div>
    </div>
  );
}
