import styled from 'styled-components';

const IntervalCard = styled.div`
  margin: 48px;
  border-radius: 50px;
  background: white;
  
  @media (max-width: 570px) {
    margin: 0;
  }
  
  h5 {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 130%;
    color: #212353;
    text-align: center;
    padding: 44px;
    font-family: 'Exo', sans-serif;
  
  @media (max-width: 570px) {
    font-size: 22px;
    padding: 20px 5px;
    }
  }
  
  .interval_text {
  font-family: 'Exo',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #1F3F68;
  opacity: 0.6;
  padding: 10px;
  }

  .interval_row {
    padding: 20px;
  }

  div.styled {
    width: 70%;
    margin: 0 auto;
    display:flex;
    justify-content: space-around;
  
  @media (max-width: 690px) {
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  button {
    width: 94px;
    height: 48px;
    border-radius: 16px;
    color: white;
    border-color: transparent;
    cursor: unset;
    margin: 10px;
  
    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  
    &.repeat {
      background: #6979F8;
    }
    
    &.easy {
      background: #DB7CF5;
    }
    
    &.mid {
      background: #AA5DDB;
    }
    
    &.hard {
      background: #7348BF;
    }
   }
  }
`;

export default IntervalCard;
