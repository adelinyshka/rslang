import styled from 'styled-components';

const StartPageWrapper = styled.div`
  background-color: #f6f6f6;
  font-family: 'Exo',sans-serif;
  position: relative;
  height: 100vh;
  
  @media (max-width: 768px) {
    height: calc(100vh - 50px);
  }
  
  .level-switch {
  position: absolute;
  z-index: 50;
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
    
  @media(max-width: 767px) {
    top: 2px;
    }
  }
  
  h2.title_h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 22px;
    text-align: center;
    color: #6979f8;
    
    @media (max-width: 1680px) {
    font-size: 60px;
    line-height: 60px;
    }
    
  @media (max-width: 1280px) {
    font-size: 50px;
    line-height: 50px;
    }  
    
    @media (max-width: 768px) {
      font-size: 40px;
      line-height: 40px;
          padding-top: 50px;
    }  
  
  }
  
  .game_description {
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: #000000;
    padding: 50px 0 30px;
    width: 60%;
    margin: 0 auto;
    
    @media (max-width: 1680px) {
    font-size: 35px;
    line-height: 60px;
    }
    
  @media (max-width: 1370px) {
    font-size: 20px;
    line-height: 40px;
    }  
    
    @media (max-width: 768px) {
      width: 90%;
      font-size: 20px;
      line-height: 40px;
    }
  }
  
  img.decoration {
    position: absolute;
    height: 700px;
    width: 700px;
    bottom: 16px;
    right: 16px;
    
   @media (max-width: 1680px) {
    height: 450px;
    width: 450px;
    }    
    
  @media (max-width: 1370px) {
    height: 300px;
    width: 300px;
    }  
    
  @media (max-width: 768px) {
    display: none;
    }
  }

  .center_alignment {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto; 
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center; 
    justify-content: center; 
    padding-left: 100px;
    
    @media (max-width: 768px) {
    padding-left: 0;
    }
  }
  
  .start_btn {
    background: #0AD1BD;
    border: #0AD1BD;
    color: white;
    width: 175px;
    height: 48px;
    margin: 0 auto;
    font-weight: bold;
    font-size: 17px;
    outline: none;
    
    &:hover,
    &:focus,
    &:active {
      background: #08A999;
      outline: none;
    }
  }
`;

export default StartPageWrapper;
