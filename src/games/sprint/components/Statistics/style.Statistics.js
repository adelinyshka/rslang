import styled from 'styled-components';

const ResultsWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background: #fafafa;
  overflow-y: scroll;
  height: 100%;
  z-index: 10;

  @media (max-width: 768px) {
     margin-left: 0;
  }

  .wrapper-icons {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: fixed;
    height: 100px;
    background: #fafafa;
    width: 100%;
    box-shadow: 7px 0px 64px rgba(0, 0, 0, 0.15);

    @media (max-width: 768px) {
      padding-top: 47px;
    }
  }

  .left, .right {
    display: flex;
    margin: 20px;
    align-items: center;

    @media (max-width: 520px) {
      margin: 5px;
    }
  }

  .results {
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    padding-left: 10px;
  }

  .left .results {
    color: #0AD1BD;
  }

  .right .results {
    color: #E10050;
  }

  .results-words {
    padding-top: 110px;
    padding-bottom: 100px;
    width: 80%;
    padding-left: 100px;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
    align-self: center;

    @media (max-width: 768px) {
      padding-left: 0;
      width: 95%;
    }

  }

  .wrapper-btn {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 10px 10px 10px 100px;
    bottom: -4px;
    background: #fafafa;
    box-shadow: 7px 0px 64px rgba(0, 0, 0, 0.15);
    margin: 0 auto;

    @media (max-width: 768px){
      padding: 10px;
      flex-wrap: wrap;
    }

     @media (max-width: 410px) {
      justify-content: space-around;
    }
  }

  .btn-close {
   font-family: 'Exo', sans-serif;
    width: 175px;
    height: 48px;
    border-radius: 6px;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    box-sizing: border-box;
    margin: 10px;
    text-align: center;
    border: 1px solid #6979F8;
    background-color: #6979F8;
    color: #fff;
    outline: none;

   @media (max-width: 410px) {
      width: 100px;
      margin: 5px;
    }

    &:hover,
    &:focus,
    &:active {
     border: 1px solid #5865CE;
      background-color: #5865CE;
      color: #fff;
      cursor: pointer;
      outline: none;
      }
    }

  .btn-new {
    font-family: 'Exo', sans-serif;
    width: 175px;
    height: 48px;
    border-radius: 6px;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    box-sizing: border-box;
    margin: 10px;
    text-align: center;
    outline: none;
    background-color: #fff;
    border: 1px solid #6979F8;
    color: #6979F8;

    @media (max-width: 410px) {
      width: 100px;
      margin: 5px;
    }

    &:hover,
    &:focus,
    &:active {
      border: 1px solid #5865CE;
      background-color: #fff;
      color: #5865CE;
    }
  }

  ul {
    list-style: none;
  }

  li {
    background: #E10050;
    border-radius: 12px;
    color: white;
    margin: 2px;
  }

  .learnedWord {
    background: #0AD1BD;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 5px;
    padding: 0 10px;

    @media (max-width: 520px) {
      font-size: 12px;
      overflow-x: scroll;
    }
  }

  p {
    margin: 5px;
    padding: 5px;
  }

  .results-audio-icon {
    cursor: pointer;
  }
`;

export default ResultsWrapper;
