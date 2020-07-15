import styled from 'styled-components';

export default styled.div`
  background-color: #f6f6f6;
  font-family: 'Exo',sans-serif;
  position: relative;
  height: 100vh;
  
  @media (max-width: 768px) {
    height: calc(100vh - 50px);
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
    
  @media(max-width: 450px) {
    display: none;
    }
  }

 h1.title_h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 22px;
    text-align: center;
    color: #6979f8;
  
  @media(max-width: 767px) {
    padding-top: 50px;
    }
  }
  
 .game_description {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #000000;
    padding: 50px 0 30px;
    width: 60%;
    margin: 0 auto;
    font-family: 'Exo',sans-serif;
    
  @media (max-width: 768px) {
      width: 90%;
      line-height: 30px;
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
    font-family: 'Exo',sans-serif;
    
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

  .wrapper-switcher {
    position: absolute;
    top: 20px;
  }
  
  img.decoration {
    position: absolute;
    height: 300px;
    weight: 300px;
    bottom: 16px;
    left: 110px;
    
 @media(max-width: 1280px) {
    height: 200px;
    weight: 200px;
    }
    
  @media (max-width: 768px) {
    display: none;
    }
  }
`;
