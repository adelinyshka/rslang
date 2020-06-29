import React from 'react';
import style from './Button.module.css';

const Button = ({
  type,
  onClick,
  children,
}) => {
  const cls = [
    style.Button,
    style[type],
  ];

  return (
    <button
      type="button"
      onClick={onClick}
      className={cls.join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
