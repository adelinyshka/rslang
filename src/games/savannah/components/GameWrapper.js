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
  overflow: hidden;
  
   @media (max-width: 768px) {
      height: calc(100vh - 50px);
      margin-left: 0;
      overflow: hidden;
    }
   
  
  .tree-wave,
  .tree-tall {
    position: absolute;
    opacity: 0.5;
  }
  
  .tree-wave {
    bottom: -10px;
    left:10px;
    width: 180px;
    
    @media (max-width: 768px) {
      left:-30px;
      width: 20%;
      }
      
    @media (max-width: 520px) {
      left: -24px;
      width: 25%;
    }
  }
  
  .tree-tall {
    bottom: -50px;
    right: -50px;
    
    @media (max-width: 768px) {
      bottom: -70px;
      width: 30%;
      }  
    
    @media (max-width: 520px) {
      bottom: -30px;
      width: 31%;
      right: -14px;
      }
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
    
    @media (max-width: 668px) {
      top: 40px;
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
    
    @media (max-width: 668px) {
      top: 40px;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
  
  .cross {
    position: absolute;
    z-index: 2;
    top: 23px;
    right: 26px;
    
    @media (max-width: 768px) {
      right: 13px;
      top: 5px;
    }
    
    @media (max-width: 668px) {
      top: 55px;
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
   
  img.crystal {
    display: block;
    position: absolute;
    bottom: 10%;
    left: calc(50% - 96px/2);
    border-radius: 0;
    border: none;
    padding: 20px;
    filter: unset;
   
    @media(max-width: 768px) {
      bottom: 5%;
    }
  }
  
    img.animation-for-crystal {
      animation: crystalAnimation 2s infinite;
    }
    
    img.animation-for-crystal-wrong {
      animation: crystalAnimationWrong 3s infinite;
    }
    
    @keyframes crystalAnimation {
      50% {
       filter: brightness(1.6);
      }
  }
  
   @keyframes crystalAnimationWrong {
      50% {
        filter: brightness(0.9);
      }
  }
  
`;

export default GameWrapper;
