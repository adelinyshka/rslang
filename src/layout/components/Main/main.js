import React from 'react';
import styles from './Main.module.css';

export default function Main() {
  return (
    <div>
      <div className={styles.Main_content}>
        <div className={styles.Block}>
          <img
            src="./assets/images/Verify.png"
            alt="games"
          />
          <h2>Мини игры</h2>
          <p className={styles.P_games}>
            6 увлекательных мини игр для тренировки слов
          </p>
          <button
            className={styles.Btn}
            type="button"
            variant="contained"
            disableelevation="true"
          >
            ИГРАТЬ
          </button>
        </div>
        <div className={styles.Block}>
          <img
            src="./assets/images/Camera.png"
            alt="cards"
          />
          <h2>Карточки</h2>
          <p>
            Благодаря методике интервального повторения вы
            быстро пополните свой словарный запас
          </p>
          <button
            className={styles.Btn}
            type="button"
            variant="contained"
            disableelevation="true"
          >
            УЧИТЬ
          </button>
          <form>
            <div className={styles.Radio}>
              <input type="radio" name="gameMode" value="new" defaultChecked />
                Новые
            </div>
            <div className={styles.Radio}>
              <input type="radio" name="gameMode" value="repeat" />
                Повтор
            </div>
            <div className={styles.Radio}>
              <input type="radio" name="gameMode" value="all" />
                Все
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
