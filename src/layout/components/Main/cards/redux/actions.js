export const changeCards = (cardsInfo) => ({
  type: 'CHANGE_CARDS',
  cardsArr: cardsInfo,
});

export const changeIsRight = (type) => ({
  type,
});
