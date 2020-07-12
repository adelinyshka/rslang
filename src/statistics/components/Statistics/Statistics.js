import React, { useMemo, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import { setStatistics } from '../../redux';
import {
  cardsStatsSelector,
  gamesStatsSelector, todayCardsStats,
} from '../../redux/selectors';

import { fetchJSON } from '../../../common/utils';

import { tokenSelector, userIdSelector } from '../../../auth/redux/selectors';

import DoughnutChart from '../Charts/DoughnutChart';
import BarChart from '../Charts/BarChart';
import GamesStat from '../GamesStat/GamesStat';

import styles from './Statistics.module.css';

const Statistics = () => {
  const [showGamesStat, setShowGamesStat] = useState(false);
  const dispatch = useDispatch();

  const {
    passedCards, rightAnswers, newWords, longestStreak,
  } = useSelector(todayCardsStats);
  const gamesStats = useSelector(gamesStatsSelector);
  const cardsStats = useSelector(cardsStatsSelector);

  const userId = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);
  useEffect(() => {
    const endpoint = `users/${userId}/statistics`;
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    };
    fetchJSON(endpoint, fetchOptions)
      .then((data) => dispatch(setStatistics(data)))
      .catch((err) => console.log(err));
  }, [dispatch, token, userId]);

  const doughnutData = useMemo(
    () => [passedCards, rightAnswers, newWords, longestStreak],
    [passedCards, rightAnswers, newWords, longestStreak],
  );

  const barData = useMemo(
    () => {
      const data = [];
      for (const [statKey, stat] of Object.entries(cardsStats)) {
        data.push({ t: new Date(statKey), y: stat.passedCards });
      }
      return data;
    }, [cardsStats],
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
