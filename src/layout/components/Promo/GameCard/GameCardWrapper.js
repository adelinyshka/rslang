import styled from 'styled-components';

const GameCardWrapper = styled.div`
  .game_card {
  padding: 40px;
  background: #FFFFFF;
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 12px;
  border: transparent;
  width: 380px;
  margin: 40px;

  @media (max-width: 480px) {
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
    border-radius: 12px;
    border: transparent;
    width: 310px;
    margin: 10px;
    }
  }

  .game_card_img {
    margin: 0 auto;
    width: 60%;
    background-size: contain;
  }
  
  .game_card_title {
    margin: 0 auto;
    padding: 15px 0;
  }

  .game_card_text {
    font-family: 'Exo', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.05em;
    color: #1F3F68;
    opacity: 0.6;
  }
  
  .game_card_img_wrapper {
    height: 150px;
    display: flex;
  }
  .game_card_text_wrapper {
    height: 135px;
    overflow-y: scroll;
  }
`;

export default GameCardWrapper;
