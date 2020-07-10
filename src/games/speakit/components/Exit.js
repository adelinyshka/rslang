import React from 'react';
import PropTypes from 'prop-types';

import StyleExit from './style.Exit';

const Exit = ({ setModalExit, exitGame }) => (
  <StyleExit>
    <div className="pop-up">
      <div className="top exit-bg">
        <div className="icon">
          <img
            src="./../assets/images/speakit/excl.svg"
            alt="question in round"
          />
        </div>
        <section className="content">
          <p>Если вы выйдете во время игры, то прогресс не сохранится</p>
        </section>

      </div>
      <div className="bottom">
        <section className="btn-wrapper">
          <button
            type="button"
            onClick={setModalExit}
            className="cancel"
          >
            Отменить
          </button>
          <button
            type="button"
            onClick={exitGame}
            className="exit"
          >
            Выйти
          </button>
        </section>

      </div>
    </div>

  </StyleExit>
);

Exit.propTypes = {
  setModalExit: PropTypes.func.isRequired,
  exitGame: PropTypes.func.isRequired,
};

export default Exit;
