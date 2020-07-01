import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import TableItem from '../TableItem/TableItem';
import HeaderCheckbox from '../Checkbox/HeaderCheckbox';
import AllWordsRemoval from '../WordRemoval/AllWordsRemoval';
import styles from './Table.module.css';

const headerInfo = [
  'дата последнего изучения',
  'дата следующего изучения',
  'повторов',
  'прогресс',
];

const headerDivs = headerInfo.map((title) => <div key={title}>{title}</div>);

const Table = ({ userWords }) => {
  const tableItems = useMemo(() => (
    userWords.map((userWord) => (
      <TableItem
        userWord={userWord}
        key={userWord.wordId}
      />
    ))), [userWords]);

  const userWordsIds = useMemo(
    () => userWords.map(({ wordId }) => wordId), [userWords],
  );

  return (
    <div className={styles.Table}>
      <div className={styles.Header}>
        <div>
          <HeaderCheckbox
            id="header"
            words={userWordsIds}
          />
        </div>
        {headerDivs}
        <AllWordsRemoval />
      </div>
      {tableItems}
    </div>
  );
};

Table.propTypes = {
  userWords: PropTypes.array.isRequired,
};

export default Table;
