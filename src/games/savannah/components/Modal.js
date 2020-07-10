import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PopUp from './PopUp';
import style from './Modal.module.css';

const Rules = ({ onRules }) => (
  <div>
    <PopUp
      type="warning"
      iconSrc="../assets/images/savannah/question_round.svg"
      content="Выберите перевод из 4 вариантов до того
                как падающее слово достигнет кристалла."
      footer={(
        <div className={style.btnWrapper}>
          <button
            className={style.exit}
            onClick={onRules}
            type="button"
          >
          Понятно
          </button>
        </div>
      )}
    />
  </div>
);

const Exit = ({ onCancel, onExit }) => (
  <div>
    <PopUp
      className="btnExit"
      type="error"
      iconSrc="/assets/images/savannah/excl_mark.svg"
      content="Если вы выйдете во время игры,
            то прогресс не сохранится"
      footer={(
        <div className={style.btnWrapper}>
          <button
            onClick={onCancel}
            className={style.cancel}
            type="button"
          >
            Отменить
          </button>
          <Link to="./../games">
            <button
              onClick={onExit}
              className={style.exit}
              type="button"
            >
            Выйти
            </button>
          </Link>
        </div>
      )}
    />
  </div>
);

Rules.propTypes = {
  onRules: PropTypes.func,
};

Rules.defaultProps = {
  onRules: () => {},
};

Exit.propTypes = {
  onCancel: PropTypes.func,
  onExit: PropTypes.func,
};

Exit.defaultProps = {
  onCancel: () => {},
  onExit: PropTypes.func,
};

export { Rules, Exit };
