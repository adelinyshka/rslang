import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { cardsInfoSelector, lastCardSelector } from '../../../redux/selectors';
import WordCard from './WordCard/WordCard';
import styles from './CardsCarousel.module.css';

const CardsCarousel = () => {
  const { cardsArr } = useSelector(cardsInfoSelector);
  const { lastCard } = useSelector(lastCardSelector);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const i = (lastCard && cardsArr[0]) ? 1 : 0;
    setIndex(i);
  }, [lastCard, cardsArr]);

  return (
    <Carousel
      className={styles.Carousel}
      interval={null}
      activeIndex={index}
      onSelect={handleSelect}
      slide={false}
      wrap={false}
      indicators={false}
    >
      {lastCard
      && (
        <Carousel.Item className={styles.CarouseItem}>
          <WordCard cardInfo={lastCard} isAnswered />
        </Carousel.Item>
      )}
      {cardsArr.length && (
        <Carousel.Item className={styles.CarouseItem}>
          <WordCard cardInfo={cardsArr[0]} isAnswered={false} />
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default CardsCarousel;
