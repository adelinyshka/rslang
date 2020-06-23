import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
// import girl from './assets/photo/Gir_Purple.jpg';

// function Card(props) {
function Card() {
  return (
    <div className="CardWrapper">
      <img
        className="image"
        // src={process.env.PUBLIC_URL + `/images/${props.name}.jpg`}
        // alt={props.name}
        src="./assets/Team/Girl.jpg"
        alt="hi1"
      />
      <div className="TextWrapper">
        <div className="Name">
          <a href="https://github.com/" className="IconGit">
            <img
              src="./assets/Team/iconGit.svg"
              alt="iconGit"
            />
          </a>
          <div className="NameDev">
            Мария Петрова,
            <br />
            разработчик
          </div>
        </div>
        <p className="TextDev">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </p>
      </div>
    </div>
  );
}

export default Card;
