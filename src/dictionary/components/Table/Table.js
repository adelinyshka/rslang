import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import TableItem from '../TableItem/TableItem';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Table.module.css';

const headerInfo = [
  'дата последнего изучения',
  'дата следующего изучения',
  'повторов',
  'прогресс',
];

const headerDivs = headerInfo.map((title) => <div key={title}>{title}</div>);

const Table = ({ userWords }) => {
  const [allSelected, setAllSelected] = useState(false);
  const tableItems = useMemo(() => (
    userWords.map((userWord) => (
      <TableItem
        userWord={userWord}
        key={userWord.wordId}
        allSelected={allSelected}
      />
    ))), [userWords, allSelected]);

  return (
    <div className={styles.Table}>
      <div className={styles.Header}>
        <div>
          <Checkbox
            clicked={setAllSelected}
            id="header"
            allSelected={allSelected}
          />
        </div>
        {headerDivs}
        <div>
          <img
            src="./assets/images/dictionary/deleteIcon.svg"
            alt="delete word"
          />
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
