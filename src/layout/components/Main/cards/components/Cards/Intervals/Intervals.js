import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Intervals.module.css';

const Intervals = () => (
  <div className={styles.Intervals}>
    <Button type="Button">Повтор</Button>
    <Button type="Button">Легко</Button>
    <Button type="Button">Средне</Button>
    <Button type="Button">Сложно</Button>
  </div>
);

export default Intervals;
