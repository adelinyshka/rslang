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
      <div className={styles.Header}>
        <div>
          <input type="checkbox" />
        </div>
        <div>
          дата последнего изучения
        </div>
        <div>
          дата следующего изучения
        </div>
        <div>
          повторов
        </div>
        <div>
          прогресс
        </div>
        <div>
          <img src="./assets/images/dictionary/deleteIcon.svg" alt="delete word" />
        </div>
      </div>
      {tableItems}
    </div>
  );
};

Table.propTypes = {
  userWords: PropTypes.array.isRequired,
};

export default Table;
