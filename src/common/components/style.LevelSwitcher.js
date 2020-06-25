import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    background: #e5e7fa;
    border-radius: 8px;
  }

  .p {
    margin-left: 10px;
  }

  .ul {
    display: flex;
    padding-inline-start: 10px;
  }

  .li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-right: 10px;
    background: #6979f8;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    border: 3px solid white;

    :hover {
      cursor: pointer;
      background: #4FC8AB;
    }
  }

  .active {
    background: #4FC8AB;
  }
`;
