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

export const modeSelector = createSelector(
  speakitSelector,
  ({ mode }) => mode,
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
)
