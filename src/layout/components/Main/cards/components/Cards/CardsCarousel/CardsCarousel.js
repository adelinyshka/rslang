import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { cardsInfoSelector, lastCardSelector } from '../../../redux/selectors';
import WordCard from './WordCard/WordCard';
import styles from './CardsCarousel.module.css';

const CardsCarousel = () => {
// переменная для хранения старой информации, чтобы стрелочка влево работала
  const { cardsArr } = useSelector(cardsInfoSelector);
  const { lastCard } = useSelector(lastCardSelector);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const i = lastCard ? 1 : 0;
    setIndex(i);
  }, [lastCard]);

  return (
    <Carousel
      className={styles.Carousel}
      interval={null}
      activeIndex={index}
      onSelect={handleSelect}
      slide={false}
      wrap={false}
    >
      {lastCard
      && (
        <Carousel.Item className={styles.CarouseItem}>
          <WordCard cardInfo={lastCard} isAnswered />
        </Carousel.Item>
      )}
      <Carousel.Item className={styles.CarouseItem}>
        <WordCard cardInfo={cardsArr[0]} isAnswered={false} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CardsCarousel;
