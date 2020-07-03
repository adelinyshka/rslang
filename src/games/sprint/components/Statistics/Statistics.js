import React from 'react';
import { useSelector } from 'react-redux';

import StyleStatistics from './style.Statistics';

import {
  resultsSelector,
} from '../../redux/selectors';

function Statistics() {
  const results = useSelector(resultsSelector);

  console.log(results);

  return (
    <StyleStatistics>
      <p>статистика</p>
    </StyleStatistics>
  );
}

export default Statistics;
