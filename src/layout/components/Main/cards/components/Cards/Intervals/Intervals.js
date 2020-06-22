import React from 'react';
import styles from './Intervals.module.css';

const Intervals = () => (
  <div className={styles.Intervals}>
    <button type="button">Повтор</button>
    <button type="button">Легко</button>
    <button type="button">Средне</button>
    <button type="button">Сложно</button>
  </div>
);

export default Intervals;
