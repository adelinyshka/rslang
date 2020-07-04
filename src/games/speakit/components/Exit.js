import React from 'react';
import PropTypes from 'prop-types';

import StyleExit from './style.Exit';

const Exit = ({ setModalExit, exitGame }) => (
  <StyleExit>
    <div className="window">
      <section className="text-section">
        <div>
          <span />
        </div>
        <p>Если вы выйдете во время игры, то прогресс не сохранится</p>
      </section>
      <section className="button-section">
        <button
          type="button"
          onClick={setModalExit}
          className="button-cancel"
        >
          Отменить
        </button>
        <button
          type="button"
          onClick={exitGame}
          className="button-exit"
        >
          Выйти
        </button>
      </section>
    </div>
  </StyleExit>
);

Exit.propTypes = {
  setModalExit: PropTypes.func.isRequired,
  exitGame: PropTypes.func.isRequired,
};

export default Exit;
