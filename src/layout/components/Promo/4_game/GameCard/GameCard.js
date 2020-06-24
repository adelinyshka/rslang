import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,} from 'react-bootstrap';
import css from './GameCard.module.css';

const GameCard = (prop) => {
  return (
    <Card className={css.game_card} bg='light' variant='top'>
      <Card.Img className={css.game_card_img} src={prop.src} />
      <Card.Body>
        <Card.Title className={css.game_card_title}>{prop.title}</Card.Title>
        <Card.Text className={css.game_card_text}>
          {prop.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
