import React from 'react';
import Card from './Card';
import style from './About.module.css';
import Header from '../Promo/Header/Header';

const teamMembers = [
  {
    photo: './assets/images/Team/1.jpg',
    name: 'Александр Пащенко,',
    github: 'https://github.com/alekchaik',
    description: `Координировал команду. Разработал и поддерживал архитектуру приложения. 
      Создал страницы карточек, настроек, статистики и словаря, настроил аутентификацию и роутинг.`,
    bgColor: '#DBF2EF',
    role: 'ведущий разработчик',
  },
  {
    photo: './assets/images/Team/2.jpg',
    name: 'Адель Дубинникова,',
    github: 'https://github.com/adelinyshka',
    description: `Разработала дизайн приложения, 
      реализовала промостраницу, игру Savannah, несколько общих
      компонентов, помогала команде с версткой`,
    bgColor: '#F2F2F2',
    role: 'дизайнер, разработчик',
  },
  {
    photo: './assets/images/Team/3.jpg',
    name: 'Максим Сливин,',
    github: 'https://github.com/raizer58',
    description: `Занимался разработкой игры Speakit(вдохновившись прототипом),
      реализовал отправку статистики на сервер и переключатель уровней в играх.`,
    bgColor: '#DBF2EF',
    role: 'разработчик',
  },
  {
    photo: './assets/images/Team/4.jpg',
    name: 'Юрий Разумный,',
    github: 'https://github.com/yuryrazumny',
    description: `Занимался разработкой общих компонентов, версткой и логикой страниц. 
      Сделал игру Audiocall . Принимал участие в разработке архитектуры проекта.`,
    bgColor: '#DBF2EF',
    role: 'разработчик',
  },
  {
    photo: './assets/images/Team/5.jpg',
    name: 'Светлана Забродина,',
    github: 'https://github.com/svetlaz',
    description: `Придумала и разработала игру Memory. Реализовала функциональную часть 
      модальных окон, сверстала страницу о команде.`,
    bgColor: '#F2F2F2',
    role: 'разработчик',
  },
  {
    photo: './assets/images/Team/6.jpg',
    name: 'Евгений Иванов,',
    github: 'https://github.com/eugenevebyza',
    description: `Реализовал игру Sprint в соответствии с дизайном, разработал 
      адаптивный компонент меню.`,
    bgColor: '#DBF2EF',
    role: 'разработчик',
  },
];

function About() {
  return (
    <>
      <Header />
      <div className={style.Wrapper}>
        <div className={style.AboutHeader}>
          <h2 className={style.AboutTitle}>Наша команда</h2>
          <p>Мы работали над проектом для вас!</p>
        </div>
        <div className={style.Main}>
          {teamMembers.map(({
            name, description, github, photo, color, role,
          }, id) => (
              <Card
                key={id}
                name={name}
                description={description}
                github={github}
                photo={photo}
                bgColor={color}
                role={role}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default About;
