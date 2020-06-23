import React from 'react';
import Card from './Card';
import './CardGroup.css';

function CardGroup() {
  const Team = [
    {
      photo: './assets/Team/Girl.jpg',
      name: 'Адель Дубинникова',
      github: 'https://github.com/adelinyshka',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua`,
    },
    {
      photo: './assets/Team/Girl.jpg',
      name: 'Александр Пащенко',
      github: 'https://github.com/alekchaik',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
    },
    {
      photo: './assets/Team/Girl.jpg',
      name: 'Максим Сливин',
      github: 'https://github.com/raizer58',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
    },
    {
      photo: './assets/Team/Girl.jpg',
      name: 'Светлана Забродина',
      github: 'https://github.com/svetlaz',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
    },
    {
      photo: './assets/Team/Girl.jpg',
      name: 'Юрий Разумный',
      github: 'https://github.com/yuryrazumny',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
    },
    {
      photo: './assets/Team/Girl.jpg',
      name: 'Евгений Вебуза',
      github: 'https://github.com/eugenevebyza',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
    },
  ];

  return (
    <div className="Main">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardGroup;
