import React from 'react';
import styles from './Audiocall.module.css';

export default function StartPage() {
  return (
    <div className={styles.Shadow}>
      <div className={styles.Warning}>
        <img
          src="./assets/images/audiocall/attention.png"
          alt="attention"
        />
        <p>
            Если вы выйдете во время игры, то прогресс не сохранится
        </p>
        <div className={styles.Butns}>
          <button type="button">
                Отменить
          </button>
          <button type="button">
                Выйти
          </button>
        </div>
      </div>
    </div>
  );
}
