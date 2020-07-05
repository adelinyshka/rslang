import styled from 'styled-components';

const SavannahWrapper = styled.div`
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
  }
  
  img.cross {
    position: absolute;
    z-index: 2;
    top: 9px;
    right: 17px;
    transform: scale(0.5);
    width: 50px;
    height: 50px;
    
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
    
    & button {
    margin: 20px;
    background: transparent;
    border: 0;
    color: white;
    outline: none;
    
    &.right {
      background: green;
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
    
    &.scale {
      transform: scale(1.1);
    }
  }
`;

export default SavannahWrapper;
