import style from 'styled-components';

export const StyleWordsContainer = style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;
`;

export const StyleWordBlock = style.div`
  display: flex;
  width: 14vw;
  background: ${({ active }) => (active ? '#6979f8' : '#0AD1BD')};
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 0% 1%;
  box-sizing: border-box;
  margin-bottom: 2vw;
  border: 2px solid ${({ active }) => (active ? '#03009e' : '#0AD1BD')};

  ${({ statusGame }) => (statusGame === 'no-speach'
    ? ':hover {background: #6979f8; border:'
    + '2px solid #03009e; cursor: pointer;}'
    : false)}

  .word_div {
    text-align: center;
    flex-grow: 1;
  }

  .word_div p {
    font-size: 17px;
  }

  .word_div p:last-child {
    font-size: 14px;
  }
`;

