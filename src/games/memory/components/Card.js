import React from 'react';
import style from './Card.module.css';

function Card({
  onCardClick, isActive, isRight, children,
}) {
  const cls = [
    style.Card,
    isActive ? style.active : '',
    isActive && isRight === true ? style.right : '',
    isActive && isRight === false ? style.error : '',
  ];

  return (
    <div className={cls.join(' ')} onClick={onCardClick}>
      {children}
    </div>
  );
}

export default Card;
