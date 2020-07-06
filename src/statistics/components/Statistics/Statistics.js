import React, { useMemo } from 'react';
import { Button } from 'react-bootstrap';

import DoughnutChart from '../Charts/DoughnutChart';
import BarChart from '../Charts/BarChart';
import styles from './Statistics.module.css';

const Statistics = () => {
  const passedCards = 54; // из api
  const rightAnswers = 50; // из api
  const newWords = 30; // из api
  const longestStreak = 20; // из api
  const doughnutData = useMemo(
    () => [passedCards, rightAnswers, newWords, longestStreak],
    [passedCards, rightAnswers, newWords, longestStreak],
  );
  const barData = useMemo(() => Array(5).fill(null).map((el, i) => ({ x: i, y: doughnutData[i] })), [doughnutData]);

  const todayCardsInfo = useMemo(() => ([
    {
      title: 'Количество пройденных карточек',
      value: passedCards,
      color: '#567DF4',
    },
    {
      title: '% верных ответов',
      value: rightAnswers,
      color: '#784AC1',
    },
    {
      title: 'Количество новых слов',
      value: newWords,
      color: '#DB7CF5',
    },
    {
      title: 'Самая длинная серия верных ответов',
      value: longestStreak,
      color: '#4CE364',
    },
  ]), [passedCards, rightAnswers, newWords, longestStreak]);

  const todayCards = useMemo(
    () => todayCardsInfo.map(({ title, value, color }) => (
      <p key={title}>
        <span>
          <span className={styles.Marker} style={{ backgroundColor: color }} />
          {title}
        </span>
        <span style={{ color }}>{value}</span>
      </p>
    )), [todayCardsInfo],
  );

  return (
    <div className={styles.StatisticsContainer}>
      <div className={styles.Today}>
        <h2>Сегодня</h2>
        <div className={styles.TodayContainer}>
          {todayCards}
        </div>
      </div>
      <div className={styles.Games}>
        <h2>Статистика по мини-играм</h2>
        <Button
          type="button"
          style={{ backgroundColor: '#6979F8' }}
        >
          Посмотреть
        </Button>
      </div>
      <div className={styles.DoughnutChart}>
        <DoughnutChart data={doughnutData} />
      </div>
      <div>
        <h2>Долгосрочная</h2>
        <BarChart data={barData} className={styles.BarChart} />
      </div>
    </div>
  );
};

export default Statistics;
