export const changeCards = (cardsInfo) => ({
  type: 'CHANGE_CARDS',
  cardsArr: cardsInfo,
});

export const changeIsRight = (type) => ({
  type,
});

export const changeLastCard = (lastCard) => ({
  type: 'CHANGE_LAST_CARD',
  lastCard,
});
