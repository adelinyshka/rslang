import styled from 'styled-components';

const HeaderListItem = styled.li`
  list-style-type: none;
  width: fit-content;
  padding: 7px;
  @media(max-width: 991px) {
      padding: 10px 0;
  }
`;

export default HeaderListItem;
