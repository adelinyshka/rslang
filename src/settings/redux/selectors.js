import { createSelector } from 'reselect';

const settingsSelector = (state) => state.settings;
const optionalSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional,
);

export const wordsPerDaySelector = createSelector(
  settingsSelector,
  ({ wordsPerDay }) => wordsPerDay,
);

export const newCardsAmountSelector = createSelector(
  optionalSelector,
  ({ newCardsAmount }) => newCardsAmount,
);

export const easyIntervalSelector = createSelector(
  optionalSelector,
  ({ easyInterval }) => easyInterval,
);

export const mediumIntervalSelector = createSelector(
  optionalSelector,
  ({ mediumInterval }) => mediumInterval,
);

export const hardIntervalSelector = createSelector(
  optionalSelector,
  ({ hardInterval }) => hardInterval,
);

export const wordTranslateSelector = createSelector(
  optionalSelector,
  ({ wordTranslate }) => wordTranslate,
);

export const wordImageSelector = createSelector(
  optionalSelector,
  ({ wordImageS }) => wordImageS,
);

export const exampleSentenceSelector = createSelector(
  optionalSelector,
  ({ exampleSentence }) => exampleSentence,
);

export const definitionSelector = createSelector(
  optionalSelector,
  ({ definition }) => definition,
);

export const sentenceTranslateSelector = createSelector(
  optionalSelector,
  ({ sentenceTranslate }) => sentenceTranslate,
);

export const transcriptionSelector = createSelector(
  optionalSelector,
  ({ transcription }) => transcription,
);

export const ButtonsSelector = createSelector(
  optionalSelector,
  ({ deleteBtn, difficultBtn, showAnswerBtn }) => (
    { deleteBtn, difficultBtn, showAnswerBtn }
  ),
);

export const autoSoundPlaySelector = createSelector(
  optionalSelector,
  ({ autoSoundPlay }) => autoSoundPlay,
);

export const interfaceHintsSelector = createSelector(
  optionalSelector,
  ({ interfaceHints }) => interfaceHints,
);

export default settingsSelector;
