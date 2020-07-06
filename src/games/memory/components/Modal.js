import React from 'react';
import PopUp from './PopUp';
import style from './Modal.module.css';

const Rules = ({ onRules }) => (
  <div>
    <PopUp
      type="warning"
      iconSrc="../assets/images/memory/iconQuestion.svg"
      content="Кликайте по словам, чтобы совместить слово и его перевод"
      footer={(
        <button
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
            className={style.cancel}
            type="button"
          >
            Отменить
          </button>
          <button
            onClick={onExit}
            type="button"
          >
            Выйти
          </button>
        </div>
      )}
    />
  </div>
);

export { Rules, Exit };
