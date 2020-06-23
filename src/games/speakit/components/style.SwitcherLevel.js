import styled from 'styled-components';

export const StyleSwitcherLevel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  background: #e5e7fa;
  border-radius: 8px;
`;

export const StyleP = styled.p`
  margin-left: 10px;
`;

export const StyleUl = styled.ul`
  display: flex;
  padding-inline-start: 10px;
`;

export const StyleSwitcher = styled.div`
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
  }
`;

export const StyleSwitcherActive = styled.div`

`;
