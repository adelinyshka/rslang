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
    margin: 0px 0px 0px 10px;
    font: normal 'Exo',sans-serif;
    font-size: 16px;
    line-height: 13px;
    color: #6979F8;
  }

  .ul {
    display: flex;
    padding-inline-start: 10px;
    margin: 10px 0px 10px 0;
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
    p {
      margin:0;
      font: normal 'Exo',sans-serif;
      font-size: 12px;
      line-height: 14px;
      color: #ffffff;

    }
  }

  .active {
    background: #4FC8AB;
  }
`;
