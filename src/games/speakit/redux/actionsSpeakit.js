import React from 'react';

const startGame = () => ({ type: 'START_GAME' });

const setWords = (gettingWords) => ({
  type: 'SET_WORDS',
  words: gettingWords,
});

const setLevel = (level) => ({
  type: 'SET_LEVEL',
  level,
});

const setActiveWord = (word) => ({
  type: 'SET_ACTIVE_WORD',
  word,
});

const actionsSpeakit = {
  startGame,
  setWords,
  setLevel,
  setActiveWord,
};

export default actionsSpeakit;
