import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import StyleResults from './style.Results';

// import {
//   wordsSelector,
//   speechWordsSelector,
// } from '../redux/selectors';

// const playAudio = (audio) => {
//   const audioPath = 'https://raw.githubusercontent.com/'
//   + 'alekchaik/rslang-data/master/';
//   const pronounce = new Audio(`${audioPath}${audio}`);
//   pronounce.play();
// };

const Results = ({ setModalResult, getNewWords }) => {
//   const words = useSelector(wordsSelector);
//   const speechWords = useSelector(speechWordsSelector);

  //   const trueWords = useMemo(() => words.reduce((count, { word }) => {
  //     const learnWord = speechWords.find((element) => word.toLocaleLowerCase()
  //     === element.toLocaleLowerCase());
  //     return learnWord ? count + 1 : count;
  //   }, 0), [speechWords, words]);

  //   const falseWords = useMemo(() => words.reduce((count, { word }) => {
  //     const learnWord = speechWords.find((element) => word.toLocaleLowerCase()
  //     === element.toLocaleLowerCase());
  //     return learnWord ? count : count + 1;
  //   }, 0), [speechWords, words]);

  return (
    <p>Когда-нибудь здесь будет результат игры </p>
    // <StyleResults>
    //   <div className="wrapper-icons">
    //  <div className="left">
    //       <img src="/assets/images/speakit/good-results.svg" alt="" />
    //       <span className="results">{`${trueWords}`}</span>
    //     </div>
    //     <div className="right">
    //       <img src="/assets/images/speakit/bad-results.svg" alt="" />
    //       <span className="results">{`${falseWords}`}</span>

  //     </div> 
  //   </div>
  //   <ul className="listWords">
  //     {
  //       words.map(({
  //         word,
  //         transcription,
  //         wordTranslate,
  //         audio,
  //       }) => {
  //         const learnedWord = speechWords.find((element) => (
  //           word.toLocaleLowerCase()
  //           === element.toLocaleLowerCase()));
  //         return (
  //           <li
  //             key={word}
  //             className={classNames({ learnedWord })}
  //           >
  //             <div>
  //               <img
  //                 className="results-audio-icon"
  //                 src="/assets/images/speakit/audio-icon.svg"
  //                 alt="audio-icon.svg"
  //                 onClick={() => playAudio(audio)}
  //                 role="section"
  //               />
  //               <p>{`${word}`}</p>
  //               <p>{`${transcription}`}</p>
  //               <p>{`${wordTranslate}`}</p>
  //             </div>
  //           </li>
  //         );
  //       })
  //     }
  //   </ul>
  //   <div className="wrapper-btn ">
  //     <button
  //       type="button"
  //       className="button__close-results"
  //       onClick={() => setModalResult()}
  //     >
  //     Return
  //     </button>
  //     <button
  //       type="button"
  //       className="button__new-game"
  //       onClick={() => getNewWords()}
  //     >
  //     New game
  //     </button>
  //   </div>
  // </StyleResults>
  );
};

Results.propTypes = {
  setModalResult: PropTypes.func.isRequired,
  getNewWords: PropTypes.func.isRequired,
};

export default Results;
