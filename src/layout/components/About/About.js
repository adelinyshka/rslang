import React from 'react';
import CardGroup from './CardGroup';
import style from './About.module.css';

function About() {
  return (
    <div className={style.Wrapper}>
      <div className={style.AboutHeader}>
        <h2 className={style.AboutTitle}>Наша команда</h2>
        <p>Мы работали над проектом для вас!</p>
      </div>
      <div className={style.Main}>
        <CardGroup />
      </div>
    </div>
  );
}

export default About;
