import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './Intervals.module.css';

const Intervals = ({ isAnswered }) => (
  <div className={styles.Intervals}>
    {
      isAnswered
        ? (
          <>
            <Button type="Button">Повтор</Button>
            <Button type="Button">Легко</Button>
            <Button type="Button">Средне</Button>
            <Button type="Button">Сложно</Button>
          </>
        )
        : <Button type="Button">Показать ответ</Button>
    }
  </div>
);

Intervals.propTypes = {
  isAnswered: PropTypes.bool.isRequired,
};

export default Intervals;
