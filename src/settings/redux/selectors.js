import { createSelector } from 'reselect';

const settingsSelector = (state) => state.settings;

export const wordsPerDaySelector = createSelector(
  settingsSelector,
  ({ wordsPerDay }) => wordsPerDay,
);

export const newCardsAmountSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional.newCardsAmount,
);

export const easyIntervalSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional.easyInterval,
);

export const mediumIntervalSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional.mediumInterval,
);

export const hardIntervalSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional.hardInterval,
);

export const wordTranslateSelector = createSelector(
  settingsSelector,
  ({ wordTranslate }) => wordTranslate,
);

export const wordImageSelector = createSelector(
  settingsSelector,
  ({ wordImageS }) => wordImageS,
);

export const exampleSentenceSelector = createSelector(
  settingsSelector,
  ({ exampleSentence }) => exampleSentence,
);

export const definitionSelector = createSelector(
  settingsSelector,
  ({ definition }) => definition,
);

export const sentenceTranslateSelector = createSelector(
  settingsSelector,
  ({ sentenceTranslate }) => sentenceTranslate,
);

export const transcriptionSelector = createSelector(
  settingsSelector,
  ({ transcription }) => transcription,
);

export const deleteBtnSelector = createSelector(
  settingsSelector,
  ({ deleteBtn }) => deleteBtn,
);

export const difficultBtnSelector = createSelector(
  settingsSelector,
  ({ difficultBtn }) => difficultBtn,
);

export const showAnswerBtnSelector = createSelector(
  settingsSelector,
  ({ showAnswerBtn }) => showAnswerBtn,
);

export const autoSoundPlaySelector = createSelector(
  settingsSelector,
  ({ autoSoundPlay }) => autoSoundPlay,
);

export const interfaceHintsSelector = createSelector(
  settingsSelector,
  ({ interfaceHints }) => interfaceHints,
);

export default settingsSelector;
