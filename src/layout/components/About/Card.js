import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.module.css';

function Card({
  photo, name, github, description, bgColor, role
}) {
  return (
    <div className={style.CardWrapper} style={{ backgroundColor: bgColor }}>
      <img
        className={style.image}
        src={photo}
        alt="photoDev"
      />
      <div className={style.TextWrapper}>
        <div className={style.Name}>
          <a
            href={github}
            className={style.IconGit}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/images/Team/iconGit.svg"
              alt="iconGit"
            />
          </a>
          <div className={style.NameDev}>
            {name}
            <br />
            {role}
          </div>
        </div>
        <p className={style.TextDev}>
          {description}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  github: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  role: PropTypes.string,
};

Card.defaultProps = {
  photo: '',
  name: '',
  github: '',
  description: '',
  bgColor: '',
  role: '',
};

export default Card;
