import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { cardsArrSelector, lastCardSelector } from '../../redux/selectors';
import WordCard from '../WordCard/WordCard';
import styles from './CardsCarousel.module.css';

const leftArrow = <span aria-hidden="true" className={styles.LeftArrow} />;
const rightArrow = <span aria-hidden="true" className={styles.RightArrow} />;

const CardsCarousel = () => {
  const cardsArr = useSelector(cardsArrSelector);
  const { previousCard } = useSelector(lastCardSelector);
  const [index, setIndex] = useState(0);

  const handleSelect = useCallback((selectedIndex) => {
    setIndex(selectedIndex);
  }, [setIndex]);

  useEffect(() => {
    const newIndex = (previousCard && cardsArr[0]) ? 1 : 0;
    setIndex(newIndex);
  }, [previousCard, cardsArr]);

  return (
    <Carousel
      className={styles.Carousel}
      interval={null}
      activeIndex={index}
      onSelect={handleSelect}
      slide={false}
      wrap={false}
      indicators={false}
      prevIcon={leftArrow}
      nextIcon={rightArrow}
    >
      {previousCard
      && (
        <Carousel.Item className={styles.CarouselItem}>
          <WordCard cardInfo={previousCard} isPreviousCard />
        </Carousel.Item>
      )}
      {cardsArr.length && (
        <Carousel.Item className={styles.CarouselItem}>
          <WordCard cardInfo={cardsArr[0]} isPreviousCard={false} />
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default CardsCarousel;
