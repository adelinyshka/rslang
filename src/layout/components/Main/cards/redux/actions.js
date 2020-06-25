export const changeCards = (cardsArr) => ({
  type: 'CHANGE_CARDS',
  cardsArr,
});

export const showAnswer = () => ({
  type: 'SHOW_ANSWER',
});

export const hideAnswer = () => ({
  type: 'HIDE_ANSWER',
});

export const changeLastCard = (previousCard) => ({
  type: 'CHANGE_LAST_CARD',
  previousCard,
});

export const submitAnswer = () => ({
  type: 'ANSWERED',
});

export const clearAnswer = () => ({
  type: 'CLEAR_ANSWER',
});

// export const clearAnswer = () => ({
//   type: 'ANSWERED_RIGHT',
// });

export const answeredWrong = () => ({
  type: 'ANSWERED_WRONG',
});
