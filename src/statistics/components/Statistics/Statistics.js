import React, { useMemo } from 'react';

import Chart from '../Chart/Chart';
import styles from './Statistics.module.css';

const Statistics = () => {
  const passedCards = 54; // из api
  const rightAnswers = 50; // из api
  const newWords = 30; // из api
  const longestStreak = 20; // из api
  const data = useMemo(
    () => [passedCards, rightAnswers, newWords, longestStreak],
    [passedCards, rightAnswers, newWords, longestStreak],
  );

  return (
    <div className={styles.StatisticsContainer}>
      <div className={styles.Today}>
        <h2>Сегодня</h2>
        <p>
          <span>Количество пройденных карточек</span>
          <span>{passedCards}</span>
        </p>
        <p>
          <span>% верных ответов</span>
          <span>{rightAnswers}</span>
        </p>
        <p>
          <span>Количество новых слов</span>
          <span>{newWords}</span>
        </p>
        <p>
          <span>Самая длинная серия верных ответов</span>
          <span>{longestStreak}</span>
        </p>
      </div>
      <div className={styles.Games}>
        <h2>Статистика по мини-играм</h2>
        <button type="button">Посмотреть</button>
      </div>
      <div className={styles.Chart}>
        <Chart data={data} />
      </div>
      <div className={styles.Long}>
        <h2>Долгосрочная</h2>
      </div>
    </div>
  );
};

export default Statistics;
