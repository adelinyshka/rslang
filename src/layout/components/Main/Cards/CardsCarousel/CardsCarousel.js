import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import WordCard from './WordCard/WordCard';

const CardsCarousel = ({ cardsInfo, setCardsInfo }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const CarouselItems = useMemo(() => {
    const itemsArr = [];
    for (let i = 0; i < 3 && i < cardsInfo.length; i++) {
      const item = (
        <Carousel.Item key={i}>
          <WordCard
            cardInfo={cardsInfo[i]}
            setCardsInfo={setCardsInfo}
            cardsInfo={cardsInfo}
          />
        </Carousel.Item>
      );
      itemsArr.push(item);
    }
    return itemsArr;
  }, [cardsInfo, setCardsInfo]);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      style={{ backgroundColor: 'black' }}
    >
      {CarouselItems}
    </Carousel>
  );
};

CardsCarousel.propTypes = {
  cardsInfo: PropTypes.array.isRequired,
  setCardsInfo: PropTypes.func.isRequired,
};

export default CardsCarousel;
