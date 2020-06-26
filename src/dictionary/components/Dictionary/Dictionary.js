import React from 'react';
import styles from './Dictionary.module.css';
import Table from '../Table/Table';

const Dictionary = () => (
  <div className={styles.Dictionary}>
    <h1>Словарь</h1>
    <div>
      <button>Изучаемые</button>
      <button>Сложные</button>
      <button>Удаленные</button>
    </div>
    <Table />
  </div>
);

export default Dictionary;
