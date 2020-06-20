import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import WordCard from './WordCard/WordCard';

const CardsCarousel = ({ cardsInfo, setCardsInfo }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (!cardsInfo) {
    return (
      <h1>Карточек не осталось</h1>
    );
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      style={{ backgroundColor: 'black' }}
    >
      <Carousel.Item>
        <WordCard
          cardInfo={cardsInfo[0]}
          setCardsInfo={setCardsInfo}
          cardsInfo={cardsInfo}
        />
      </Carousel.Item>
      <Carousel.Item>
        <WordCard cardInfo={cardsInfo[1]} />
      </Carousel.Item>
      <Carousel.Item>
        <WordCard cardInfo={cardsInfo[2]} />
      </Carousel.Item>
    </Carousel>
  );
};

CardsCarousel.propTypes = {
  cardsInfo: PropTypes.array.isRequired,
  setCardsInfo: PropTypes.func.isRequired,
};

export default CardsCarousel;
