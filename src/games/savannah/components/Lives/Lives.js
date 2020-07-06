import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LiveWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  top: 50px;
  right: 25px;
`;

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
          style={{ transform: 'scale(0.8)' }}
          src={src}
          alt="lives"
          key={i}
        />,
      );
    }

    return lives;
  }, [livesCount, src]);

  return (
    <LiveWrapper>
      {
        drawLives()
      }
    </LiveWrapper>
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
