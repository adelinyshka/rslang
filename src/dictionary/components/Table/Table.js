import React, { useMemo } from 'react';

import styles from './Table.module.css';
import TableItem from '../TableItem/TableItem';

const Table = () => {
  const wordsInfo = [{}];
  const tableItems = useMemo(() => wordsInfo.map(({ word }) => <TableItem word={word} />), [wordsInfo]);
  return (
    <div className={styles.Table}>
      {tableItems}
    </div>
  );
};

export default Table;
