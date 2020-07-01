import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import GameCardWrapper from './GameCardWrapper';

const GameCard = ({ src, title, text }) => (
  <GameCardWrapper>
    <Card className="game_card" bg="light" variant="top">
      <div className="game_card_img_wrapper">
        <Card.Img className="game_card_img" src={src} />
      </div>
      <Card.Body>
        <Card.Title className="game_card_title">{title}</Card.Title>
        <div className="game_card_text_wrapper">
          <Card.Text className="game_card_text">
            {text}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  </GameCardWrapper>
);

GameCard.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GameCard;
