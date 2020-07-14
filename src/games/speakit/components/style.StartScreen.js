import style from 'styled-components';

export default style.div`
  text-align: center;
  background-color: #f6f6f6;
  font-family: 'Exo',sans-serif;
  position: relative;
  height: 100vh;
  margin-left: 100px;
  
  @media (max-width: 768px) {
    height: calc(100vh - 50px);
     margin-left: 0;
  }
  
  @media (orientation: landscape) and (max-width: 768px) {
      height: auto;
      padding: 30px;
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
  
  h1 {
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
  
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #000000;
    padding: 50px 0 30px;
    width: 60%;
    margin: 0 auto;
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
    
    @media (orientation: landscape) and (max-width: 768px) {
      position: unset;
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
    .decoration {
    position: absolute;
    height: 300px;
    weight: 300px;
    bottom: 16px;
    right: 16px;
    
  @media (max-width: 768px) {
    display: none;
    }
    }
    
  
  
`;
