import React from 'react';
import CardGroup from './CardGroup';
import './About.css';

function About() {
  return (
    <div className="Wrapper">
      <div className="AboutHeader">
        <h2 className="AboutTitle">Наша команда</h2>
        <p>Мы работали над проектом для вас!</p>
      </div>
      <div className="Main">
        <CardGroup />
      </div>
    </div>
  );
}

export default About;
