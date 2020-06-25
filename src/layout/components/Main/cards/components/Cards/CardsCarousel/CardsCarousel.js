import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { cardsInfoSelector, lastCardSelector } from '../../../redux/selectors';
import WordCard from '../WordCard/WordCard';
import styles from './CardsCarousel.module.css';

const leftArrow = <span aria-hidden="true" className={styles.LeftArrow} />;
const rightArrow = <span aria-hidden="true" className={styles.RightArrow} />;

const CardsCarousel = () => {
  const { cardsArr } = useSelector(cardsInfoSelector);
  const { lastCard } = useSelector(lastCardSelector);
  const [index, setIndex] = useState(0);

  const handleSelect = useCallback((selectedIndex) => {
    setIndex(selectedIndex);
  }, [setIndex]);

  useEffect(() => {
    const newIndex = (lastCard && cardsArr[0]) ? 1 : 0;
    setIndex(newIndex);
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
      prevIcon={leftArrow}
      nextIcon={rightArrow}
    >
      {lastCard
      && (
        <Carousel.Item className={styles.CarouselItem}>
          <WordCard cardInfo={lastCard} isAnswered />
        </Carousel.Item>
      )}
      {cardsArr.length && (
        <Carousel.Item className={styles.CarouselItem}>
          <WordCard cardInfo={cardsArr[0]} isAnswered={false} />
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default CardsCarousel;
