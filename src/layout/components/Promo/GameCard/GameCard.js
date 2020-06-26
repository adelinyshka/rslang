import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import css from './GameCard.module.css';
import styled from 'styled-components';

const GameCardWrapper = styled.div`
  height: 150px;
  display: flex;
`;

const GameCardTextWrapper = styled.div`
  height: 135px;
  overflow-y: scroll;
`;

const GameCard = (prop) => (
  <Card className={css.game_card} bg='light' variant='top'>
    <GameCardWrapper>
      <Card.Img className={css.game_card_img} src={prop.src}/>
    </GameCardWrapper>
    <Card.Body>
      <Card.Title className={css.game_card_title}>{prop.title}</Card.Title>
      <GameCardTextWrapper>
        <Card.Text className={css.game_card_text}>
          {prop.text}
        </Card.Text>
      </GameCardTextWrapper>
    </Card.Body>
  </Card>
);

export default GameCard;
