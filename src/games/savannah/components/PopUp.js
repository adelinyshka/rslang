import React from 'react';
import PropTypes from 'prop-types';
import style from './PopUp.module.css';

function PopUp({
  onClick,
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
    <div className={style.BlackScreen} onClick={onClick}>
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

PopUp.propTypes = {
  onClick: PropTypes.func,
  iconSrc: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string,
};

PopUp.defaultProps = {
  onClick: () => {},
  iconSrc: '',
  content: '',
  type: '',
};

export default PopUp;
