import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import css from './GameCard.module.css';
import { GameCardTextWrapper, GameCardWrapper } from './GameCardWrapper';

const GameCard = ({ src, title, text }) => (
  <Card className={css.game_card} bg="light" variant="top">
    <GameCardWrapper>
      <Card.Img className={css.game_card_img} src={src} />
    </GameCardWrapper>
    <Card.Body>
      <Card.Title className={css.game_card_title}>{title}</Card.Title>
      <GameCardTextWrapper>
        <Card.Text className={css.game_card_text}>
          {text}
        </Card.Text>
      </GameCardTextWrapper>
    </Card.Body>
  </Card>
);

GameCard.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GameCard;
