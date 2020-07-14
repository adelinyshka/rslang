import style from 'styled-components';

export const StyleWordsContainer = style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
`;

export const StyleWordBlock = style.div`
  padding: 10px;
  display: flex;
  width: 190px;
  height: 83px;
  background: ${({ active }) => (active ? '#6979f8' : '#0AD1BD')};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 10px;
  border: 2px solid ${({ active }) => (active ? '#6979f8' : '#0AD1BD')};

  ${({ statusGame }) => (statusGame === 'no-speach'
    ? ':hover {background: #08A999; border:'
    + '2px solid #08A999; cursor: pointer;}'
    : false)}
    
    @media (max-width: 520px) {
      width: 80%;
      height: 40px;
      justify-content: space-between;
      margin: 4px;
      padding:  0 10px;
    }

  .word_div {
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    align-self: baseline;
    
    @media (max-width: 520px) {
      flex-direction: row;
      justify-content: center;
      padding: 5px;
    }
  }

  .word_div p {
    font-size: 17px;
    margin-bottom: 10px;
    
    @media (max-width: 520px) {
      margin-bottom: unset;
      padding: 0 10px;
      text-align: center;
    }
  }

  .word_div p:last-child {
    font-size: 14px;
  }
`;

