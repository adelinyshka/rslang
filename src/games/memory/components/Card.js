import React from 'react';
import style from './Card.module.css';

function Card({ onCardClick, children }) {
  const cls = [
    style.Card,
    // style[props.type],
  ];

  return (
    <div className={cls.join(' ')} onClick={onCardClick}>
      {children}
    </div>
  );
}

export default Card;
