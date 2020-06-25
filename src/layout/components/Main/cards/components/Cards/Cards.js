import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardsArrSelector } from '../../redux/selectors';
import { tokenSelector } from '../../../../../../auth/redux/selectors';
import { changeCards } from '../../redux/actions';
import CardsCarousel from './CardsCarousel/CardsCarousel';
import Progress from './Progress/Progress';
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
    getWords(token)
      .then((data) => dispatch(changeCards(data)))
      .catch((er) => console.log(er));
  }, [token, dispatch]);

  return (
    <div className={styles.Container}>
      {cardsArr.length
        ? <CardsCarousel />
        : (
          <div className={styles.EmptyCards}>
            <h1>Карточек не осталось</h1>
          </div>
        )}
      <Progress cardsArr={cardsArr} newCardsAmount={20} />
    </div>
  );
};

export default Cards;
