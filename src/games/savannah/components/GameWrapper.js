import styled from 'styled-components';

const GameWrapper = styled.div`
  font-family: 'Exo',sans-serif;
  font-size: 25px;
  height: 100vh;
  margin-left: 50px;
  position: relative;
  color: white;
  background: -o-linear-gradient(218.82deg, #9FAF92 -0.81%, #037264 96.43%);
  background: linear-gradient(231.18deg, #9FAF92 -0.81%, #037264 96.43%);
  
  @media (max-width: 768px) {
    height: calc(100vh - 50px);
    margin-left: 0;
    overflow: hidden;
  }
  
  @media (orientation: landscape) and (max-width: 768px) {
    height: calc(100vh - 50px);
    margin-left: 0;
    overflow: scroll;
  }
  
  img.sound {
    position: absolute;
    z-index: 2;
    top: 9px;
    right: 107px;
    transform: scale(0.5);
    width: 70px;
    height: 70px;
    
    @media (max-width: 768px) {
      right: 100px;
      width: 60px;
      top: -8px;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
  
  img.question {
    position: absolute;
    z-index: 2;
    top: 9px;
    right: 56px;
    transform: scale(0.5);
    width: 70px;
    height: 70px;
    
    @media (max-width: 768px) {
      right: 45px;
      top: -8px;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
  
  img.cross {
    position: absolute;
    z-index: 2;
    top: 9px;
    right: 7px;
    transform: scale(0.5);
    width: 70px;
    height: 70px;
    
    @media (max-width: 768px) {
      right: -4px;
      top: -8px;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
  
  .wrapper_falling {
    position: absolute;
    margin: auto;
    top: 10%;
    right: 0;
    left: 0;
    width: 250px;
    height: 50px;
    
    @media(max-width: 786px) {
      top: 17%;
    }
    
    @media (orientation: landscape) and (max-width: 768px) {
     top: 18%;
    }
  }
  
  .animation {
    animation: falling 5s infinite;
  }

  .no-animation {
    animation: unset;
  }

  .falling_word {
    font-size: 35px;
    text-align: center;
  }
  
  @keyframes falling {
  0% {
    top: 10%;
  }
  100% {
    top: 60%;
  }
  }
  
  .listWords {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 30%;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    
    @media(max-width: 786px) {
      top: 25%;
      width: 100%;
    }
    
    @media (orientation: landscape) and (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
    }
    
    & button {
    margin: 20px;
    background: transparent;
    border: 0;
    color: white;
    outline: none;
    
    @media (max-width: 768px){
      margin: 10px;
    }
    
    &.right {
      background: rgba(125, 223, 195, 0.6);
      border-radius: 8px;
    }
    
    &.wrong {
      opacity: 0.5;
    }
    
    &:hover,
    &:focus,
    &:active {
      border: 0;
      color: white;
      outline: none;
      }
    }
  }
  
  img.crystall {
    display: block;
    position: absolute;
    bottom: 10%;
    left: calc(50% - 96px/2);
    
    @media(max-width: 768px) {
      bottom: 5%;
    }
  }
`;

export default GameWrapper;
