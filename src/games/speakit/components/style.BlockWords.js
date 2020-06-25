import style from 'styled-components';

export const StyleWordsContainer = style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
  color: white;
`;

export const StyleWordBlock = style.div`
  display: flex;
  width: 18vw;
  background: ${(props) => (props.active ? '#6979f8' : '#0AD1BD')};
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 0% 1%;
  box-sizing: border-box;
  margin-bottom: 3%;
  border: 2px solid ${(props) => (props.active ? '#03009e' : '#0AD1BD')};

  :hover{
    background: #6979f8;
    border: 2px solid #03009e;
  }

  .word_div {
    text-align: center;
    flex-grow: 1;
  }
`;

