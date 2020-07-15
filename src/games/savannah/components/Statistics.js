import React from 'react';
import { useSelector } from 'react-redux';

import {
  resultsSelector,
} from '../redux/selectors';

function Statistics() {
  const results = useSelector(resultsSelector);

  return (
    <p>статистика</p>
  );
}

export default Statistics;
