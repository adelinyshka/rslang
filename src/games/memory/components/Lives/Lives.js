import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import style from './Lives.module.css';

function Lives({ livesCount, leftLifesHandler, src }) {
  useEffect(() => {
    if (livesCount <= 0) {
      leftLifesHandler();
    }
  }, [leftLifesHandler, livesCount]);

  const drawLives = useCallback(() => {
    const lives = [];

    for (let i = 0; i < livesCount; i += 1) {
      lives.push(
        <img
          src={src}
          alt="lives"
          key={i}
        />,
      );
    }

    return lives;
  }, [livesCount, src]);

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
  livesCount: 0,
  leftLifesHandler: () => {},
  src: '',
};

export default Lives;
