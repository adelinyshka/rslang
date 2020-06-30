import React, { useMemo } from 'react';

import Chart from '../Chart/Chart';

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
    <div>
      <div>
        <h1>Сегодня</h1>
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
      <Chart data={data} />
    </div>
  );
};

export default Statistics;
