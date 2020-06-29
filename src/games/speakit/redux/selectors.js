import { createSelector } from 'reselect';

export const speakitSelector = (state) => state.speakit;

export const wordsSelector = createSelector(
  speakitSelector,
  ({ words }) => words,
);

export const activeWordSelector = createSelector(
  speakitSelector,
  ({ activeWord }) => activeWord,
);

export const statusGameSelector = createSelector(
  speakitSelector,
  ({ statusGame }) => statusGame,
);

export const levelSelector = createSelector(
  speakitSelector,
  ({ level }) => level,
);

export const imageSelector = createSelector(
  speakitSelector,
  ({ image }) => image,
);

export const translateActiveWordSelector = createSelector(
  speakitSelector,
  ({ translateActiveWord }) => translateActiveWord,
);

export const speechActiveWordSelector = createSelector(
  speakitSelector,
  ({ speechActiveWord }) => speechActiveWord,
);

export const speechWordsSelector = createSelector(
  speakitSelector,
  ({ speechWords }) => speechWords,
);
