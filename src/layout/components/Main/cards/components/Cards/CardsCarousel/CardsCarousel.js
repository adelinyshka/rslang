import React from 'react';
import { useSelector } from 'react-redux';
import { cardsInfo } from '../../../redux/selectors';
import WordCard from './WordCard/WordCard';
import styles from './CardsCarousel.module.css';

const CardsCarousel = () => {
// переменная для хранения старой информации, чтобы стрелочка влево работала
  const { cardsArr } = useSelector(cardsInfo);

  return (
    <div className={styles.Carousel}>
      <p>
        {'<'}
      </p>
      <WordCard cardInfo={cardsArr[0]} />
      <p>{'>'}</p>
    </div>
  );
};

export default CardsCarousel;
