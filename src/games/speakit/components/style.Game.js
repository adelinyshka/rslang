import style from 'styled-components';

export default style.div`
  margin-left: 100px;
  padding: 2.5vw 5vw;
  text-align: center;
  background: #FAFAFA;

  .container__rules {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3vw;
    right: 10vw;
    width: 39px;
    height: 35px;
    background: rgba(105, 121, 248, 0.4);
    border-radius: 6px;
  }

  .container__rules img {
    height: 17px;

  }

  .container__exit {
    position: absolute;
    top: 3vw;
    right: 5vw;
    width: 35px;
    height: 35px;
  }

  .cross::after,
  .cross::before {
    content: "";
    position: absolute;
    top: 15.5px;
    left: 5px;
    border: 2px solid #25282B;
    border-radius: 100px;
    width: 25px;
  }

  .cross::after {
    transform: rotate(45deg);
  }

  .cross::before {
    transform: rotate(-45deg);
  }

  .container__rules: hover,
  .container__exit: hover {
    cursor: pointer;
  }

  .button__restart,
  .button__show-results {
    border: 2px solid #6979F8;
    box-sizing: border-box;
    border-radius: 6px;
    height: 5vh;
    width: 15vw;
    font-size: 17px;
    outline: none;
  }

  .button__restart {
    margin-right: 4vw;
  }

  .button__speak-please {
    border: 2px solid #6979F8;
    box-sizing: border-box;
    border-radius: 6px;
    background: #6979f8;
    height: 5vh;
    width: 15vw;
    font-size: 17px;
    margin-right: 4vw;
    outline: none;
  }

  .button__restart:hover,
  .button__show-results:hover {
    cursor: pointer;
    background: #6979F8;
  }

  .button__speak-please:hover {
    cursor: pointer;
    background: #FAFAFA;
  }

  .figure {
    width: 360px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    border-radius: 12px;
    overflow: hidden;
  }

  .img {
    width: 360px;
    height: 240px;
  }

  .figcaption {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    margin-bottom: 1vh;
    height: 5vh;
  }

  .figcaption .microphone {
    position: absolute;
    width: 20px;
    left: 2%;
  }

  .button__close-results {
    border: 2px solid #6979F8;
    box-sizing: border-box;
    border-radius: 6px;
    height: 5vh;
    width: 15vw;
    font-size: 17px;
    outline: none;
  }

  .button__new-game {
    border: 2px solid #6979F8;
    box-sizing: border-box;
    border-radius: 6px;
    height: 5vh;
    width: 15vw;
    font-size: 17px;
    outline: none;
  }

  .button__close-results:hover,
  .button__new-game:hover {
    cursor: pointer;
    background: #6979F8;
  }
`;
