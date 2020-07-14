import style from 'styled-components';

export default style.div`
  position: relative;
  margin-left: 100px;
  padding: 2.5vw 5vw;
  text-align: center;
  background: #FAFAFA;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0;
  }

  .container__rules {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 70px;
    width: 39px;
    height: 35px;
    background: rgba(105, 121, 248, 0.4);
    border-radius: 6px;
    
    @media(max-width: 768px) {
      top: 5px;
    } 
    
    @media(max-width: 570px) {
      display: none;
    } 
  }

  .container__rules img {
    height: 17px;
  }

  .container__exit {
    position: absolute;
    top: 30px;
    right: 20px;
    width: 35px;
    height: 35px;
    
    @media(max-width: 768px) {
      top: 5px;
    } 
    
    @media(max-width: 570px) {
      display: none;
    } 
  }

  .cross::after,
  .cross::before {
    content: "";
    position: absolute;
    top: 15.5px;
    left: 5px;
    border: 1px solid #25282B;
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

  .figure {
    width: 320px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03);
  }

  .imgFigure {
    width: 320px;
    height: 240px;
  }

  .figcaption {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    height: 54px;
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
    color: #000000;
  }

  .figcaption .microphone {
    position: absolute;
    width: 20px;
    left: 2%;
  }
  
  .wrapper-btn {
    display: flex;
    width: 60%;
    min-width: 630px;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding-top: 20px;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      justify-content: center;
      min-width: unset;
    }
  }
  
  .button__restart,
  .button__show-results,
  .button__speak-please,
  .button__new-game,
  .button__close-results {
    width: 178px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 22px;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 5px;
        
    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }
  
  .button__restart,
  .button__show-results,
  .button__close-results {
    border: 2px solid #6979F8;
    background: transparent;
    box-sizing: border-box;
    color: #6979F8;
    
    &:hover,
    &:focus,
    &:active {
      border: 2px solid #5865CE;
      color: #5865CE;
    }
  }

  .button__speak-please,
  .button__new-game {
    background: #6979F8;
    border: 2px solid #6979F8;
    color: #fff;
    
    &:hover,
    &:focus,
    &:active {
      border: 2px solid #5865CE;
      color: #fff;
      background: #5865CE;
    }
  }
`;
