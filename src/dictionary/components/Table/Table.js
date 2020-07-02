/* eslint-disable no-underscore-dangle */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { userWordsSelector } from '../../redux/selectors';

import TableItem from '../TableItem/TableItem';
import HeaderCheckbox from '../Checkbox/HeaderCheckbox';
import AllWordsRemoval from '../WordRemoval/AllWordsRemoval';
import AllWordsRecovery from '../WordRecovery/AllWordsRecovery';
import styles from './Table.module.css';

const headerInfo = [
  'дата последнего изучения',
  'дата следующего изучения',
  'повторов',
  'прогресс',
];

const Table = ({ section }) => {
  const userWords = useSelector(userWordsSelector);

  const tableItems = useMemo(() => (
    userWords.map((wordInfo) => (
      <TableItem
        wordInfo={wordInfo}
        key={wordInfo._id}
        section={section}
      />
    ))), [userWords, section]);

  const userWordsIds = useMemo(
    () => userWords.map(({ wordId }) => wordId), [userWords],
  );

  const headerDivs = useMemo(() => (
    section !== 'learning'
      ? null
      : headerInfo.map((title) => <div key={title}>{title}</div>)
  ), [section]);

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
        {section !== 'learning' && <AllWordsRecovery />}
        <AllWordsRemoval />
      </div>
      {tableItems.length
        ? tableItems
        : <h1>Еще нет слов</h1>}
    </div>
  );
};

Table.propTypes = {
  section: PropTypes.string.isRequired,
};

export default Table;
