import React, { useState, useEffect } from 'react';
import CardsCarousel from './CardsCarousel/CardsCarousel';
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
  const numOfWords = 20; // тоже из redux
  const [cardsInfo, setCardsInfo] = useState();
  useEffect(() => {
    getWords(token)
      .then((data) => setCardsInfo(data.splice(0, 2)))
      .catch((er) => console.log(er));
  }, [token]);

  return (
    <div className={styles.Container}>
      <div className={styles.Navigation}>
        <div>Удалить</div>
        <div>Добавить в сложные</div>
        <div>Показать перевод</div>
      </div>
      <div className={styles.Cards}>
        {cardsInfo && cardsInfo.length
          ? <CardsCarousel cardsInfo={cardsInfo} setCardsInfo={setCardsInfo} />
          : <h1>Карточек не осталось</h1>}
      </div>
      <div className={styles.Intervals}>
        Интервалы
      </div>
      <div className={styles.Progress}>
        Прогресс
      </div>
    </div>
  );
};

export default Cards;
