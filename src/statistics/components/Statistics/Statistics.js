import React, { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';

import DoughnutChart from '../Charts/DoughnutChart';
import BarChart from '../Charts/BarChart';
import GamesStat from '../GamesStat/GamesStat';

import styles from './Statistics.module.css';

const Statistics = () => {
  const [showGamesStat, setShowGamesStat] = useState(true);

  const passedCards = 54; // из api
  const rightAnswers = 50; // из api
  const newWords = 30; // из api
  const longestStreak = 20; // из api
  const doughnutData = useMemo(
    () => [passedCards, rightAnswers, newWords, longestStreak],
    [passedCards, rightAnswers, newWords, longestStreak],
  );
  // заглушка, из api (t - не магическое число, так надо по документации графиков)
  const barData = useMemo(
    () => Array(20).fill(null).map((el, i) => (
      { t: new Date(Date.UTC(2020, 7, i)), y: i * i }
    )), [],
  );

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
      <GamesStat show={showGamesStat} onHide={() => setShowGamesStat(false)} />
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
          onClick={() => setShowGamesStat(true)}
        >
          Посмотреть
        </Button>
      </div>
      <div className={styles.DoughnutChart}>
        <DoughnutChart data={doughnutData} />
      </div>
      <div className={styles.BarChart}>
        <BarChart data={barData} />
      </div>
    </div>
  );
};

export default Statistics;
