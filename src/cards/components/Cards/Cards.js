import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardsArrSelector } from '../../redux/selectors';
import { tokenSelector } from '../../../auth/redux/selectors';
import { setCards } from '../../redux';
import CardsCarousel from '../CardsCarousel/CardsCarousel';
import Progress from '../Progress/Progress';
import styles from './Cards.module.css';

const getWords = async (token) => {
  const rawResponse = await fetch(
    'https://afternoon-falls-25894.herokuapp.com/words?group=1&page=1', {
      method: 'GET',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    },
  );
  const content = await rawResponse.json();
  return content;
};

const Cards = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const cardsArr = useSelector(cardsArrSelector);
  useEffect(() => {
    if (cardsArr) return;
    getWords(token)
      .then((data) => dispatch(setCards(data)))
      .catch((er) => console.log(er));
  }, [token, dispatch, cardsArr]);

  if (!cardsArr || !cardsArr.length) {
    return (
      <div className={styles.EmptyCards}>
        <h1>Карточек не осталось</h1>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <CardsCarousel />
      <Progress cardsArr={cardsArr} newCardsAmount={20} />
    </div>
  );
};

export default Cards;
