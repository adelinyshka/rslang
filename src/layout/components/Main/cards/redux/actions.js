export const changeCards = (cardsInfo) => ({
  type: 'CHANGE_CARDS',
  cardsArr: cardsInfo,
});

export const showAnswer = () => ({
  type: 'SHOW_ANSWER',
});

export const hideAnswer = () => ({
  type: 'HIDE_ANSWER',
});

export const changeLastCard = (lastCard) => ({
  type: 'CHANGE_LAST_CARD',
  lastCard,
});
