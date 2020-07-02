import React from 'react';
import PropTypes from 'prop-types';
import style from './Lives.module.css';

function Lives({ livesCount, leftLifesHandler, src }) {
  if (livesCount <= 0) {
    leftLifesHandler();
  }

  function drawLives() {
    const lives = [];

    for (let i = 0; i < livesCount; i += 1) {
      lives.push(<img
        src={src}
        alt="lives"
        key={i}
      />);
    }

    return lives;
  }

  return (
    <div className={style.Lives}>
      {
        drawLives()
      }
    </div>
  );
}

Lives.propTypes = {
  livesCount: PropTypes.number,
  leftLifesHandler: PropTypes.func,
  src: PropTypes.string,
};

Lives.defaultProps = {
  livesCount: '',
  leftLifesHandler: () => {},
  src: '',
};

export default Lives;
