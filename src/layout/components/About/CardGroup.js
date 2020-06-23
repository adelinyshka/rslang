// import React from 'react';
// import Card from './Card';

// function CardGroup() {
//   const team = [
//     {
//       photo: './assets/Team/Guy.jpg',
//       name: 'Александр Пащенко,',
//       github: 'https://github.com/alekchaik',
//       description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//       sed do eiusmod tempor incididunt ut labore et dolore
//       magna aliqua`,
//       bgColor: '#DBF2EF',
//     },
//     {
//       photo: './assets/Team/Girl.jpg',
//       name: 'Адель Дубинникова,',
//       github: 'https://github.com/adelinyshka',
//       description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//             sed do eiusmod tempor incididunt ut labore et dolore
//             magna aliqua`,
//       bgColor: '#F2F2F2',
//     },
//     {
//       photo: './assets/Team/Guy.jpg',
//       name: 'Максим Сливин,',
//       github: 'https://github.com/raizer58',
//       description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//       sed do eiusmod tempor incididunt ut labore et dolore
//       magna aliqua`,
//       bgColor: '#DBF2EF',
//     },
//     {
//       photo: './assets/Team/Guy.jpg',
//       name: 'Юрий Разумный,',
//       github: 'https://github.com/yuryrazumny',
//       description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//       sed do eiusmod tempor incididunt ut labore et dolore
//       magna aliqua`,
//       bgColor: '#DBF2EF',
//     },
//     {
//       photo: './assets/Team/Girl.jpg',
//       name: 'Светлана Забродина,',
//       github: 'https://github.com/svetlaz',
//       description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//       sed do eiusmod tempor incididunt ut labore et dolore
//       magna aliqua`,
//       bgColor: '#F2F2F2',
//     },
//     {
//       photo: './assets/Team/Guy.jpg',
//       name: 'Евгений Иванов,',
//       github: 'https://github.com/eugenevebyza',
//       description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//       sed do eiusmod tempor incididunt ut labore et dolore
//       magna aliqua`,
//       bgColor: '#DBF2EF',
//     },
//   ];

//   const getCards = () => {
//     const cards = [];

//     for (let i = 0; i < team.length; i += 1) {
//       cards.push(<Card
//         key={i}
//         name={team[i].name}
//         description={team[i].description}
//         github={team[i].github}
//         photo={team[i].photo}
//         bgColor={team[i].bgColor}
//       />);
//     }

//     return cards;
//   };

//   return (
//     getCards()
//   );
// }

// export default CardGroup;
