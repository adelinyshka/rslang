import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({
  photo, name, github, text, bgColor,
}) {
  return (
    <div className="CardWrapper" style={{ backgroundColor: bgColor }}>
      <img
        className="image"
        src={photo}
        alt="photoDev"
      />
      <div className="TextWrapper">
        <div className="Name">
          <a href={github} className="IconGit">
            <img
              src="./assets/Team/iconGit.svg"
              alt="iconGit"
            />
          </a>
          <div className="NameDev">
            {name}
            <br />
            разработчик
          </div>
        </div>
        <p className="TextDev">
          {text}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  github: PropTypes.string,
  text: PropTypes.string,
  bgColor: PropTypes.string,
};

Card.defaultProps = {
  photo: '',
  name: '',
  github: '',
  text: '',
  bgColor: '',
};

export default Card;
