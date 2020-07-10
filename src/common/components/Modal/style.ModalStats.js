import Style from 'styled-components';

export default Style.div`
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  .pop-up {
    z-index: 50;
    width: 80%;
    max-width: 745px;
    height: 485px;
    top: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 50px;
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.03);
  
  @media (max-width: 768px) {
    width: 80%;
    min-width: 300px;
    margin-left: 0;
    margin-top: 20px;
    }
  }

  .top {
    width: 100%;
    height: 350px;
    color: #000;
    border-radius: 12px 12px 0 0;
    text-align: center;
  }

  .content {
    min-height: 300px;
    font-family: 'Exo',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      width: 90%;
      margin: 0 auto;
    }
  }

  img.icon {
    width: 70px;
    margin: 30px;
  }
  
  .round {
  width: 20px;
  }
  
  .bottom {
    width: 100%;
    height: 125px;
    background-color: #fff;
    color: #6979F8;
    text-align: center;
    margin: auto;
    border-radius: 0 0 12px 12px;
    font-size: 24px;
    display: flex;
    justify-content: center;
  }
  
  .btn-wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  
  .exit-bg {
    background: #FDAFBB;
  }
  
  .cancel {
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
  }
  
  .cancel:hover {
    border: 1px solid #5865CE;
    background-color: #fff;
    color: #5865CE;
  }
  
  .exit {
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
 
  .stats {
    background: #7DDFC3;
  }
  
  .congrats-text {
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #6979F8;
  }
  
  .text-stats {
    text-align: left;
    align-self: center;
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    color: #22215B;
    
    @media (max-width: 630px) {
      font-size: 16px;
    }
  }
  
  .text-green,
  .text-dark-vio,
  .text-vio,
  .text-pink {
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    
    @media (max-width: 630px) {
      font-size: 16px;
    }
  }
  
  .text-green {
    color: #fff;
  }
  
  .text-dark-vio {
    color: #567DF4;
  }
  
  .text-vio {
    color: #784AC1;
    }
    
  .text-pink {
    color: #DB7CF5;
  }
  
`;
