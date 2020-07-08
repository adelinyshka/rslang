import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PopUp from './PopUp';
import style from './Modal.module.css';

const Rules = ({ onRules, onCancel }) => (
  <div>
    <PopUp
      type="warning"
      iconSrc="../assets/images/memory/iconQuestion.svg"
      content="Кликайте по словам, чтобы совместить слово и его перевод"
      footer={(
        <button
          className={style.btnRules}
          onClick={onRules}
          type="button"
        >
          Понятно
        </button>
      )}
    />
  </div>
);

const Exit = ({ onCancel, onExit }) => (
  <div>
    <PopUp
      type="error"
      iconSrc="../assets/images/memory/iconExclamation.svg"
      content={(
        <div>
          <p>
          Если вы выйдете во время игры,
            <br />
          то прогресс не сохранится
          </p>
        </div>
      )}
      footer={(
        <div>
          <button
            onClick={onCancel}
            className={classNames(style.btnCancel)}
            type="button"
          >
            Отменить
          </button>
          <Link to="./">
            <button
              className={style.btnExit}
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

export { Rules, Exit };
