import React from 'react';
import Card from './Card';

function CardGroup() {
  const Team = [
    {
      photo: './assets/Team/Guy.jpg',
      name: 'Александр Пащенко,',
      github: 'https://github.com/alekchaik',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
      bgColor: '#DBF2EF',
    },
    {
      photo: './assets/Team/Girl.jpg',
      name: 'Адель Дубинникова,',
      github: 'https://github.com/adelinyshka',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua`,
      bgColor: '#F2F2F2',
    },
    {
      photo: './assets/Team/Guy.jpg',
      name: 'Максим Сливин,',
      github: 'https://github.com/raizer58',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
      bgColor: '#DBF2EF',
    },
    {
      photo: './assets/Team/Guy.jpg',
      name: 'Юрий Разумный,',
      github: 'https://github.com/yuryrazumny',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
      bgColor: '#DBF2EF',
    },
    {
      photo: './assets/Team/Girl.jpg',
      name: 'Светлана Забродина,',
      github: 'https://github.com/svetlaz',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
      bgColor: '#F2F2F2',
    },
    {
      photo: './assets/Team/Guy.jpg',
      name: 'Евгений Иванов,',
      github: 'https://github.com/eugenevebyza',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua`,
      bgColor: '#DBF2EF',
    },
  ];

  const getCards = () => {
    const cards = [];

    for (let i = 0; i < Team.length; i += 1) {
      cards.push(<Card
        key={i}
        name={Team[i].name}
        text={Team[i].text}
        github={Team[i].github}
        photo={Team[i].photo}
        bgColor={Team[i].bgColor}
      />);
    }

    return cards;
  };

  return (
    getCards()
  );
}

export default CardGroup;
