import React from 'react';
import Card from './Card';
import style from './About.module.css';

const teamMembers = [
  {
    photo: './assets/Team/Guy.jpg',
    name: 'Александр Пащенко,',
    github: 'https://github.com/alekchaik',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua`,
    bgColor: '#DBF2EF',
  },
  {
    photo: './assets/Team/Girl.jpg',
    name: 'Адель Дубинникова,',
    github: 'https://github.com/adelinyshka',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua`,
    bgColor: '#F2F2F2',
  },
  {
    photo: './assets/Team/Guy.jpg',
    name: 'Максим Сливин,',
    github: 'https://github.com/raizer58',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua`,
    bgColor: '#DBF2EF',
  },
  {
    photo: './assets/Team/Guy.jpg',
    name: 'Юрий Разумный,',
    github: 'https://github.com/yuryrazumny',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua`,
    bgColor: '#DBF2EF',
  },
  {
    photo: './assets/Team/Girl.jpg',
    name: 'Светлана Забродина,',
    github: 'https://github.com/svetlaz',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua`,
    bgColor: '#F2F2F2',
  },
  {
    photo: './assets/Team/Guy.jpg',
    name: 'Евгений Иванов,',
    github: 'https://github.com/eugenevebyza',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua`,
    bgColor: '#DBF2EF',
  },
];

function About() {
  return (
    <div className={style.Wrapper}>
      <div className={style.AboutHeader}>
        <h2 className={style.AboutTitle}>Наша команда</h2>
        <p>Мы работали над проектом для вас!</p>
      </div>
      <div className={style.Main}>
        {teamMembers.map(({
          name, description, github, photo, color,
        }, id) => (
          <Card
            key={id}
            name={name}
            description={description}
            github={github}
            photo={photo}
            bgColor={color}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
