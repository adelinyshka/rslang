import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { isShowingAnswerSelector } from '../../redux/selectors';
import { showAnswer, setNavFetchOptions } from '../../redux';

import NavItem from './NavItem';
import styles from './Navigation.module.css';

const Navigation = ({ isPreviousCard }) => {
  const dispatch = useDispatch();
  const isShowingAnswer = useSelector(isShowingAnswerSelector);

  const itemsInfo = useMemo(() => [
    {
      alt: 'Удалить',
      icon: 'deleteIcon.svg',
      clicked: () => dispatch(setNavFetchOptions({
        deleted: true,
        learning: false,
        difficult: false,
      })),
    },

    {
      alt: 'Добавить в сложные',
      icon: 'addToDifficultIcon.svg',
      clicked: () => dispatch(setNavFetchOptions({
        deleted: false,
        difficult: true,
      })),
    },

    {
      alt: 'Показать перевод',
      icon: 'translationIcon.svg',
      clicked: () => (
        isPreviousCard ? null : dispatch(showAnswer(!isShowingAnswer))
      ),
    },
  ], [dispatch, isPreviousCard, isShowingAnswer]);

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

