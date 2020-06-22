import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardsInfoSelector } from '../../redux/selectors';
import { changeCards, showAnswer } from '../../redux/actions';
import CardsCarousel from './CardsCarousel/CardsCarousel';
import Navigation from './Navigation/Navigation';
import Intervals from './Intervals/Intervals';
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
  // token будем получать из redux
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzk5M2RmNGNhOWQ2MDAxNzg3NDBhZSIsImlhdCI6MTU5MDI2OTE1OCwiZXhwIjoxNTkwMjgzNTU4fQ.XHKmdY_jk1R7PUbgCZfqH8TxH6XQ0USwPBSKNHMdF6I';
  const { cardsArr } = useSelector(cardsInfoSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    getWords(token)
      .then((data) => dispatch(changeCards(data)))
      .catch((er) => console.log(er));
  }, [token, dispatch]);

  return (
    <div className={styles.Container}>
      <Navigation />
      <div className={styles.Cards}>
        {cardsArr
          ? <CardsCarousel />
          : <h1>Карточек не осталось</h1>}
      </div>
      <Intervals />
      <div className={styles.Progress}>
          Прогресс
      </div>
    </div>
  );
};

export default Cards;
