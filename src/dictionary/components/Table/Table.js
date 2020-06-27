import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import fetchData from '../../../common/utils';
import styles from './Table.module.css';
import TableItem from '../TableItem/TableItem';

const Table = ({ wordsInfo, token }) => {
  // const
  const wordsId = useMemo(() => wordsInfo.map((({ wordId }) => wordId)), [wordsInfo]);
  console.log(wordsId);
  const tableItems = useMemo(() => wordsInfo.map((word) => <TableItem word={word} key={word} />), [wordsInfo]);
  return (
    <div className={styles.Table}>
      {tableItems}
    </div>
  );
};

Table.propTypes = {
  wordsInfo: PropTypes.array.isRequired,
};

export default Table;
