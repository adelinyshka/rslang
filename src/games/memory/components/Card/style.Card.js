import style from 'styled-components';

export default style.div`
  .Card {
    width: 170px;
    height: 100px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #D0C9D6;
    box-sizing: border-box;
    border-radius: 8px;

    @media (max-width: 1250px) {
      width: 150px;
      height: 80px;
    }
  
    @media (max-width: 1150px) {
      width: 130px;
      height: 80px;
    }

    @media (max-width: 1115px) {
      width: 110px;
      height: 70px;
      margin: 3px;
    }

    @media (max-width: 860px) {
      width: 100px;
      height: 60px;
      margin: 3px;
      font-size: 15px;
    }

    @media (max-width: 800px) {
      width: 85px;
      height: 50px;
      margin: 3px;
      font-size: 12px;
    }

    @media (max-width: 800px) {
      width: 95px;
      height: 60px;
      margin: 2px;
      font-size: 12px;
    }
  }

  .Card:hover {
    box-shadow: 5px 5px 5px rgba(52, 69, 221, 0.5);
    cursor: pointer;
  }

  .CardEng, .cardRus {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .active {
    background-color: #A5AFFB;
  }

  .right {
    background-color: #0AD1BD;
  }

  .error {
    background-color: #E10050;
  }

  .correct {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .correct:hover {
    cursor: not-allowed;
  }

  .hide {
    display: none;
  }
`;
