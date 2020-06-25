import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { showAnswer } from '../../../redux/actions';
import NavItem from './NavItem';
import styles from './Navigation.module.css';

const Navigation = () => {
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
      clicked: () => dispatch(showAnswer()),
    },
  ], [dispatch]);

  const navItems = useMemo(() => itemsInfo.map(({ alt, icon, clicked }) => (
    <NavItem alt={alt} icon={icon} clicked={clicked} key={alt} />
  )), [itemsInfo]);

  return (
    <div className={styles.Navigation}>
      {navItems}
    </div>
  );
};
export default Navigation;

