/* eslint-disable no-underscore-dangle */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { userWordsSelector, wordsAmountSelector } from '../../redux/selectors';
import { updateWordsAmount } from '../../redux';

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
  const dispatch = useDispatch();
  const userWords = useSelector(userWordsSelector);
  const wordsAmount = useSelector(wordsAmountSelector);

  const tableItems = useMemo(() => (
    userWords.slice(0, wordsAmount).map((wordInfo) => (
      <TableItem
        wordInfo={wordInfo}
        key={wordInfo._id}
        section={section}
      />
    ))), [userWords, section, wordsAmount]);

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
        {section !== 'deleted' && <AllWordsRemoval /> }
      </div>
      {tableItems.length
        ? tableItems
        : <h1>Еще нет слов</h1>}
      {wordsAmount < userWords.length
      && (
        <Button
          className={styles.ShowWordsButton}
          onClick={() => dispatch(updateWordsAmount())}
        >
          Показать еще слова
        </Button>
      )}
    </div>
  );
};

Table.propTypes = {
  section: PropTypes.string.isRequired,
};

export default Table;
