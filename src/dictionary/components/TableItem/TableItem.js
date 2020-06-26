import React, { useMemo } from 'react';

import styles from './TableItem.module.css';

const TableItem = () => {
  const progressInt = 5;
  let progressClass = null;
  switch (progressInt) {
    case 5:
      progressClass = 'Blue';
      break;
    case 4:
      progressClass = 'Blue';
      break;
    case 3:
      progressClass = 'Blue';
      break;
    case 2:
      progressClass = 'Blue';
      break;
    case 1:
      progressClass = 'Blue';
      break;
    default:
      progressClass = null;
      break;
  }
  const progress = useMemo(() => Array(5).map((el, index) => (
    <div
      key={`progressPoint${index}`}
      className={index <= progressInt ? progressClass : null}
    />
  )), [progressInt, progressClass]);
  return (
    <div className={styles.TableItem}>
      <div className={styles.Word}>
        <div>Listen</div>
        <div>word</div>
        <div>слово</div>
      </div>
      <div>
      01.06
      </div>
      <div>
      19.06
      </div>
      <div>
      21
      </div>
      <div>
        {progress}
      </div>
    </div>
  );
};

export default TableItem;
