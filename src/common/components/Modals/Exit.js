import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyleExit from './style.ModalExit';

const ModalExit = ({ setModalExit, setReduxStatus }) => (
  <StyleExit>
    <div className="pop-up">
      <div className="top exit-bg">
        <div className="icon">
          <img
            src="/assets/images/common/excl.svg"
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
          <Link to="../games">
            <button
              type="button"
              onClick={setReduxStatus}
              className="exit"
            >
              Выйти
            </button>
          </Link>
        </section>

      </div>
    </div>

  </StyleExit>
);

const Exit = ({ onExit }) => {
  const [isExit, setIsExit] = useState(false);

  const onExitClickHandler = useCallback((exit) => {
    setIsExit(!exit);
  }, []);

  return (
    <div
      onClick={() => onExitClickHandler(isExit)}
    >
      {isExit ? (
        <ModalExit
          setModalExit={() => setIsExit(false)}
          setReduxStatus={onExit}
        />
      ) : false}
      <img
        style={{ cursor: 'pointer' }}
        src="/assets/images/common/x.svg"
        alt="cross"
      />
    </div>
  );
};

ModalExit.propTypes = {
  setModalExit: PropTypes.func.isRequired,
  setReduxStatus: PropTypes.func.isRequired,
};

Exit.propTypes = {
  onExit: PropTypes.func.isRequired,
};

export default Exit;
