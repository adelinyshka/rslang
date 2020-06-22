import React from 'react';
import styles from './Promo.module.css';

export default function Header () {
  return (
    <header className={styles.Promo_header}>
      <ul>
        <li><a href="">О приложении</a></li>
        <li><a href="">Особенности</a></li>
        <li><a href="">Игры</a></li>
        <li><a href="">Метод интервального повторения</a></li>
        <li><a href="">О команде</a></li>
      </ul>
    </header>
  );
}