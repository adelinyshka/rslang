import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import styles from './Table.module.css';
import TableItem from '../TableItem/TableItem';

const Table = ({ userWords }) => {
  const tableItems = useMemo(() => userWords.map((userWord) => (
    <TableItem userWord={userWord} key={userWord.wordId} />
  )), [userWords]);
  return (
    <div className={styles.Table}>
      {tableItems}
    </div>
  );
};

Table.propTypes = {
  userWords: PropTypes.array.isRequired,
};

export default Table;
