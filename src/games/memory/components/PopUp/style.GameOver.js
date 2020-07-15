import style from 'styled-components';

export default style.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background: #fafafa;
  overflow-y: scroll;
  height: 100%;
  
  @media (max-width: 768px) {
     margin-left: 0;
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
  
  .listWords {
    padding-top: 50px;
    width: 80%;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      padding: 0;
    }
    
    @media (max-width: 520px) {
      width: 95%;
      margin: 0 auto;
    }
  }
  
  .wrapper-btn {
    display: flex;
    width: 60%;
    min-width: 630px;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    
    @media (max-width: 630px) {
      flex-wrap: wrap;
      min-width: unset;
      padding: 10px;
      width: 100%;
    }
  }
  .btnExit {
    font-family: Exo, sans-serif;
    width: 175px;
    height: 48px;
    color: white;
    border: none;
    border-radius: 6px;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 22px;
    margin-top: 45px;
    background-color: #6979F8;
  }
  .btnExit:hover {
    background: #5865CE;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  li {
    background: #E10050;
    border-radius: 12px;
    color: white;
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
