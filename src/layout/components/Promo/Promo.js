import React from 'react';
import styles from './Promo.module.css';
import Header from './Header';

export default function Promo () {
  return (
    <div>
      <Header/>
      <h2 className={styles.Promo_title}>Hello, Im Promo</h2>
    </div>
  );
}