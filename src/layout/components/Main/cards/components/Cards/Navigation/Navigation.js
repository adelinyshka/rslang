import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { showAnswer } from '../../../redux/actions';
import NavItem from './NavItem';
import styles from './Navigation.module.css';

const Navigation = ({ isAnswered }) => {
  const dispatch = useDispatch();
  const itemsInfo = useMemo(() => [
    {
      alt: 'Удалить',
      icon: 'deleteIcon.svg',
      clicked: () => {},
    },
    {
      alt: 'Добавить в сложные',
      icon: 'addToDifficultIcon.svg',
      clicked: () => {},
    },
    {
      alt: 'Показать перевод',
      icon: 'translationIcon.svg',
      clicked: () => (isAnswered ? null : dispatch(showAnswer())),
    },
  ], [dispatch, isAnswered]);

  const navItems = useMemo(() => itemsInfo.map(({ alt, icon, clicked }) => (
    <NavItem alt={alt} icon={icon} clicked={clicked} key={alt} />
  )), [itemsInfo]);

  return (
    <div className={styles.Navigation}>
      {navItems}
    </div>
  );
};

Navigation.propTypes = {
  isAnswered: PropTypes.bool.isRequired,
};

export default Navigation;

