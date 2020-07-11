/* eslint-disable max-len */
import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';

import { setCards, setCardsTotal } from '../../redux';
import { cardsArrSelector, cardsModeSelector } from '../../redux/selectors';
import {
  wordsPerDaySelector,
  newCardsAmountSelector,
} from '../../../settings/redux/selectors';
import { userIdSelector } from '../../../auth/redux/selectors';

import useAPI from '../../../common/utils';

import CardsCarousel from '../CardsCarousel/CardsCarousel';
import Progress from '../Progress/Progress';
import styles from './Cards.module.css';

const options = {};

const Cards = () => {
  const dispatch = useDispatch();
  const cardsArr = useSelector(cardsArrSelector);
  const cardsMode = useSelector(cardsModeSelector);
  const wordsPerDay = useSelector(wordsPerDaySelector);
  const newCardsAmount = useSelector(newCardsAmountSelector);
  const userId = useSelector(userIdSelector);

  const url = useMemo(() => {
    let aggregatedUrl = `users/${userId}/aggregatedWords?`;
    const date = new Date(Date.now());
    const dateString = date.toLocaleDateString('en-US');
    switch (cardsMode) {
      case 'new':
        aggregatedUrl += `wordsPerPage=${newCardsAmount}&filter={"userWord":null}`;
        break;
      case 'repeat':
        aggregatedUrl += `wordsPerPage=${wordsPerDay}&filter={"userWord.optional.nextDate":"${dateString}"}`;
        break;
      default:
        aggregatedUrl += `wordsPerPage=${wordsPerDay}&filter={"$or":[{"userWord.optional.nextDate":"${dateString}"},{"userWord":null}]}`;
        break;
    }
    return newCardsAmount ? aggregatedUrl : null;
  }, [userId, newCardsAmount, wordsPerDay, cardsMode]);

  const action = useCallback((data) => {
    batch(() => {
      const cards = data[0].paginatedResults;
      dispatch(setCards(cards));
      dispatch(setCardsTotal(cards.length));
    });
  }, [dispatch]);

  useAPI(url, options, action);

  if (!cardsArr || !cardsArr.length) {
    return (
      <div className={styles.bgColor}>
        <div className={styles.EmptyCards}>
          <h1>Карточек не осталось</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.bgColor}>
      <div className={styles.Container}>
        <CardsCarousel />
        <Progress cardsArr={cardsArr} newCardsAmount={20} />
      </div>
    </div>
  );
};

export default Cards;
