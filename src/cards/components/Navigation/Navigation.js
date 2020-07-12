import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { isShowingAnswerSelector } from '../../redux/selectors';
import { showAnswer, setNavFetchOptions } from '../../redux';
import { ButtonsSelector } from '../../../settings/redux/selectors';

import NavItem from './NavItem';
import styles from './Navigation.module.css';

const Navigation = ({ isPreviousCard }) => {
  const dispatch = useDispatch();
  const isShowingAnswer = useSelector(isShowingAnswerSelector);

  const {
    deleteBtn,
    difficultBtn, showAnswerBtn,
  } = useSelector(ButtonsSelector);

  const itemsInfo = useMemo(() => [
    {
      alt: 'Удалить',
      icon: 'deleteIcon.svg',
      display: deleteBtn,
      clicked: () => dispatch(setNavFetchOptions({
        deleted: true,
        learning: false,
        difficult: false,
      })),
    },

    {
      alt: 'Добавить в сложные',
      icon: 'addToDifficultIcon.svg',
      display: difficultBtn,
      clicked: () => dispatch(setNavFetchOptions({
        deleted: false,
        difficult: true,
      })),
    },

    {
      alt: 'Показать перевод',
      icon: 'translationIcon.svg',
      display: showAnswerBtn,
      clicked: () => (
        isPreviousCard ? null : dispatch(showAnswer(!isShowingAnswer))
      ),
    },
  ], [deleteBtn, difficultBtn, dispatch,
    isPreviousCard, isShowingAnswer, showAnswerBtn]);

  const navItems = useMemo(() => itemsInfo.map(({
    alt, icon, clicked, display,
  }) => (
    display && <NavItem alt={alt} icon={icon} clicked={clicked} key={alt} />
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

