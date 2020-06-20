import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from './Card/Card';

const CardsCarousel = ({ cardsInfo }) => {
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
        <Card cardInfo={cardsInfo[0]} />
      </Carousel.Item>
      <Carousel.Item>
        <Card cardInfo={cardsInfo[1]} />
      </Carousel.Item>
      <Carousel.Item>
        <Card cardInfo={cardsInfo[2]} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CardsCarousel;
