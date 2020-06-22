import React from 'react';
import { useDispatch } from 'react-redux';
import { showAnswer } from '../../../redux/actions';
import styles from './Navigation.module.css';

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.Navigation}>
      <button type="button">Удалить</button>
      <button type="button">Добавить в сложные</button>
      <button
        type="button"
        onClick={() => dispatch(showAnswer())}
      >
    Показать перевод
      </button>
    </div>
  );
};
export default Navigation;

