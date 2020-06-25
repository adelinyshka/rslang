import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { showAnswer } from '../../redux/actions';
import NavItem from './NavItem';
import styles from './Navigation.module.css';

const Navigation = ({ isPreviousCard }) => {
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
      clicked: () => (isPreviousCard ? null : dispatch(showAnswer())),
    },
  ], [dispatch, isPreviousCard]);

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
  isPreviousCard: PropTypes.bool.isRequired,
};

export default Navigation;

