import React from 'react';
import style from './PopUp.module.css';

function PopUp({
  type,
  iconSrc,
  content,
  footer,
}) {
  const cls = [
    style.Top,
    style[type],
  ];

  return (
    <div className={style.BlackScreen}>
      <div className={style.PopUp}>
        <div className={cls.join(' ')}>
          <div className={style.icon}><img src={iconSrc} alt="icon" /></div>
          <div className={style.content}>{content}</div>
        </div>
        <div className={style.Bottom}>{footer}</div>
      </div>
    </div>
  );
}

export default PopUp;
