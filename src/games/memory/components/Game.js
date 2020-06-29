import React, { useState } from 'react';
import Card from './Card';
import style from './Game.module.css';

function Game() {
  const level = 0;

  const dictionary = [
    {
      word: 'game',
      translate: 'игра',
      id: 1,
    },
    {
      word: 'car',
      translate: 'машина',
      id: 2,
    },
    {
      word: 'dinosaur',
      translate: 'динозавр',
      id: 3,
    },
    {
      word: 'planet',
      translate: 'планета',
      id: 4,
    },
    {
      word: 'plant',
      translate: 'растение',
      id: 5,
    },
    {
      word: 'keyboard',
      translate: 'клавиатура',
      id: 6,
    },
    {
      word: 'harpsichord',
      translate: 'клавесин',
      id: 7,
    },
    {
      word: 'sun',
      translate: 'солнце',
      id: 8,
    },
    {
      word: 'evolution',
      translate: 'эволюция',
      id: 9,
    },
    {
      word: 'information',
      translate: 'информация',
      id: 10,
    },
  ];

  function onPickCard(cardId) {
    console.log('добавить другой цвет', cardId);
    // нахожу нужное слово
    dictionary.filter((item) => {
      if (item.id === cardId) {
        console.log(item.word);
      }
    });
  }

  return (
    <div className={style.GameWrapper}>
      <div className={style.Level}>
        Блок с уровнем
        {level}
      </div>
      <div className={style.Lives}>
        <div>Жизни</div>
        <div>Часы</div>
      </div>
      <div className={style.CardBlock}>
        <div className={style.cardEng}>
          {
            dictionary.map(({ word, id }, index) => (
              <Card
                key={index}
                onCardClick={() => onPickCard(id)}
              >
                {word}
              </Card>
            ))
          }
        </div>

        <div className={style.cardRus}>
          {
            dictionary.map(({ translate, id }, index) => (
              <Card
                key={index}
                onCardClick={() => onPickCard(id)}
              >
                {translate}
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Game;
